import { Router } from '@angular/router';
import { Component, Inject, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
import * as moment from 'moment';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TestComponent} from './test/test.component';
import {Test1Component} from './test1/test1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatDatepicker) picker: MatDatepicker<Moment>;
  isValidMoment = false;
  form: FormGroup;
  constructor(@Inject(Router) private router: Router,
  private formBuilder: FormBuilder) {
    this.router.config.unshift({
      path: 'test', component: TestComponent
    },
    {
      path: 'test1', component: Test1Component
    });
  }
  title = 'bui';
  links = [];
  public addNewRoute() {
    this.links.push({path: 'test', text: 'test'});
    this.links.push({path: 'test1', text: 'test1'});

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
          purchaseDate: '',
        });
       }

}
