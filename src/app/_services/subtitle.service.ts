import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtitleService {

  constructor(private http: HttpClient) { }

  getSubtitles(id: Object) {
    return this.http.get(`http://video.google.com/timedtext?lang=en&v=${id}`, { responseType: 'text' });
  }
}
