import { SystemComponent } from './../../system/system.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = '';
  returnUrl: string;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
    // redirect to home if already logged in
    // if (this.authService.currUserValue) {
    //   this.router.navigate(['/system']);
    // }
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
    // reset login status
    this.authService.logout();

  }

  onSubmit() {
    this.submitted = true;

    const formData = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.authService.login(formData.email, formData.password)
    .pipe(first())
    .subscribe(
        data => {
          this.router.navigate(['/system']);
        },
        // error message
        error => {
            this.error = error;
            window.setTimeout(() => {
              this.error = '';
            }, 5000);
          }
    );
  }
}
