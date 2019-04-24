import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.router.navigate(['/videoplayer']);

    this.searchForm = new FormGroup({
      'videoLink': new FormControl(null, [Validators.required])
    });
  }

  logout() {
    this.appComponent.logout();
  }

  onSubmitSearch() {
    console.log(this.searchForm.value);
  }
}
