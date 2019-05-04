
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
      'videoLink': new FormControl(null, [Validators.required])
    });
  }

  logout() {
    this.appComponent.logout();
  }

  get f() { return this.searchForm.controls; }

  onSubmitSearch() {

    console.log(this.f.videoLink.value);

    this.searchService.getInfo(this.f.videoLink.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/system/videoplayer']);
      },
      // error => {
      //   this.alertService.error(error);
      // }
    );
  }
}
