import { Component, OnInit } from '@angular/core';

import { SubtitleService } from './../../_services/subtitle.service';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {

  constructor(
    private subtitleService: SubtitleService,
  ) { }

  ngOnInit() {
  }

  // Convert XML to JSON
  xmlToJson(xml) {

    let obj = {};

    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj[attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
      }

    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof(obj[nodeName]) === 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) === 'undefined') {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

  // get subtitle, and save in localStorage
  onClick() {
    this.subtitleService.getSubtitles((JSON.parse(localStorage.getItem('currentIdVideo'))))
    .subscribe(
      data => {
        const parser = new DOMParser();
        const subtitleXml = parser.parseFromString(data, 'text/xml');
        const subtitleObj = this.xmlToJson(subtitleXml);
        localStorage.setItem('subtitleObj', JSON.stringify(subtitleObj));
      }, error => {
        if (error === 'OK') {
          console.log('We has Error');
        }
      }
    );
  }
}
