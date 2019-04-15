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
  form: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/videoplayer']);

    this.form = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    });
  }

  logout() {

  }
}
