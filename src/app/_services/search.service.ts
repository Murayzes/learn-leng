import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getInfo(link: string) {
    return this.http.post<any>(`https://topvideoplayer.herokuapp.com/api/video/getInfo`, {link});
  }
}
