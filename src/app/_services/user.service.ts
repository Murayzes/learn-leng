import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(email: string, name: string, password: string) {
    return this.http.post<any>(`https://topvideoplayer.herokuapp.com/api/users/create`, { email, name, password });
  }
}
