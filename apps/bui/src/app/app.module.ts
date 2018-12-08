import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatFormFieldModule, MatInputModule, DateAdapter} from '@angular/material';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import 'moment/min/locales';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { CustomeDateAdapter } from './custome-date-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YY',
  },
  display: {
    dateInput: 'DD-MMM-YY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent, Test1Component],
  imports: [BrowserModule, AppRoutingModule, NxModule.forRoot(),
     MatDatepickerModule, MatMomentDateModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
     BrowserAnimationsModule],
  providers: [
  // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  {provide: MAT_DATE_FORMATS, useFactory: abc},
  {provide: DateAdapter, useClass: CustomeDateAdapter},
  {provide: MAT_DATE_LOCALE, useFactory: locale}
],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent, Test1Component]
})
export class AppModule {
}
function abc() {
  return MY_FORMATS;
}
function locale() {
  return 'ar-dz';
}
