import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currUserSubject: BehaviorSubject<User>;
  public currUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currUser')));
    this.currUser = this.currUserSubject.asObservable();
  }

  public get currUserValue(): User {
    return this.currUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`https://topvideoplayer.herokuapp.com/api/users/auth`, { email, password })
      .pipe(map(user => {
        // if there's a jwt token in the response sucess
        if (user && user.token_refresh) {
          // save dataUser and tooken
          localStorage.setItem('currUser', JSON.stringify(user));
          this.currUserSubject.next(user);
        }
        return user;
      }));
  }

  createNewUser(user: User) {
    return this.http.post(`https://topvideoplayer.herokuapp.com/api/users/create`, user);
  }

  // refreshToken() {
  //   return this.http.post('https://topvideoplayer.herokuapp.com/api/users/refresh', '');
  // }

  logout() {
    // remove user in local storage to logout user
    // return this.http.post(`https://topvideoplayer.herokuapp.com/api/users/logout`, ''),
    localStorage.removeItem('currUser'),
    this.currUserSubject.next(null);
  }
}
