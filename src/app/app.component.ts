import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './shared/services/auth.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currUser: User;

  constructor(
      private router: Router,
      private authService: AuthService
  ) {
      this.authService.currUser.subscribe(x => this.currUser = x);
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
}

