import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../auth.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(null, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const{ name, email, password } = this.form.value;
    const user = new User(name, email, password);

    this.authService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}

