import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { NewEnquiryCityComponent } from './new-enquiry-city/new-enquiry-city.component';
import { NewEnquiryAreaComponent } from './new-enquiry-area/new-enquiry-area.component';
import { NewEnquiryPropertyComponent } from './new-enquiry-property/new-enquiry-property.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { NewEnquiryFormComponent } from './new-enquiry-form/new-enquiry-form.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {LoginFormComponent } from './login-form/login-form.component';
import {AuthModule } from '@auth0/auth0-angular';
import {RouterModule} from "@angular/router";
import {AuthService} from "./auth.service";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEnquiryComponent,
    NewEnquiryCityComponent,
    NewEnquiryAreaComponent,
    NewEnquiryPropertyComponent,
    DashboardComponent,
    NewEnquiryFormComponent,
    LoginFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    AuthModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
