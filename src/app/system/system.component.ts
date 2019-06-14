import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { SearchService } from '../_services';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  opened: boolean;
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private searchService: SearchService,
  ) { }

  ngOnInit() {

    this.searchForm = new FormGroup({
      'videoLink': new FormControl((null || JSON.parse(localStorage.getItem('currentLinkVideo'))), [Validators.required])
    });
  }

  logout() {
    this.appComponent.logout();
  }

  get f() { return this.searchForm.controls; }

  onSubmitSearch() {

    this.searchService.getInfo(this.f.videoLink.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/system/videoplayer']);
        localStorage.setItem('currentIdVideo', JSON.stringify(data['video_identifier']));
        localStorage.setItem('currentLinkVideo', JSON.stringify(this.f.videoLink.value));
      }
    );
  }
}
