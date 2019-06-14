import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AlertService, RegisterService, AuthService } from '../../_services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../auth.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService,
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/login']);
  }
   }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(null, [Validators.requiredTrue])
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    this.registerService.register(this.f.email.value, this.f.name.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }
}
