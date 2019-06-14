import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(email: string, name: string, password: string) {
    return this.http.post<any>(`https://videoplayerlatest.herokuapp.com/api/users/create`, { name, email, password });
  }
}
