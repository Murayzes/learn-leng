import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from './../../shared/models/user.model';
import { UsersService } from './../../shared/services/users.service';
import { Message } from '../../shared/models/message.model';
import { AuthService } from './../../shared/services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  ngOnInit() {

    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLoggin']) {
          this.showMessage({ text: 'Now you can login', type: 'success' });
        }
      });

    this.form = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'rememberme': new FormControl(null)
    });
  }

  private showMessage(message: Message) { // login message method
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit () {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
              this.cookieService.set('email', formData.email);
              this.cookieService.set('password', formData.password);
              this.cookieService.set('remember', formData.rememberme);

              this.message.text = '';
              this.authService.login();
              // this.router.navigate(['']);
              if (this.cookieService.get('remember')) {
                formData.email = this.cookieService.get('email');
                formData.password = this.cookieService.get('password');
                formData.rememberme = this.cookieService.get('remember');
              }
          } else {
            this.showMessage({ text: 'Wrong password!', type: 'danger'});
          }
        } else {
          this.showMessage({ text: 'This user does not exist!', type: 'danger'});
        }
      });
  }

}
