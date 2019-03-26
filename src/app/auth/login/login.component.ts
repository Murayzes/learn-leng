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

  // onRemember() {                                                        // If remember on cookie = true
  //   if (this.cookieService.get('remember')) {                           // then set cookie dates on inputs
  //     this.form.value.email = this.cookieService.get('email');
  //     this.form.value.password = this.cookieService.get('password');
  //     this.form.value.rememberme = this.cookieService.get('remember');
  //   }
  // }

  onSubmit () {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            if (formData.rememberme) {                            // If rememberme = true
              this.cookieService.set('email', formData.email);    // then save date(email, password, remember) on cookie
              this.cookieService.set('password', formData.password);
              this.cookieService.set('remember', formData.rememberme);
            } else {
              this.cookieService.delete('email');
              this.cookieService.delete('password');
            }

              this.message.text = '';
              this.authService.login();
              // this.router.navigate(['']);
          } else {
            this.showMessage({ text: 'Wrong password!', type: 'danger'});
          }
        } else {
          this.showMessage({ text: 'This user does not exist!', type: 'danger'});
        }
      });
  }

}
