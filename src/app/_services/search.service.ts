import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getInfo(link: object) {
    return this.http.post<any>(`https://videoplayerlatest.herokuapp.com/api/video/getInfo`, { link });
  }
}
