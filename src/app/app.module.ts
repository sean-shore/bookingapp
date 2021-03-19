import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { NewEnquiryCityComponent } from './new-enquiry-city/new-enquiry-city.component';
import { NewEnquiryAreaComponent } from './new-enquiry-area/new-enquiry-area.component';
import { NewEnquiryPropertyComponent } from './new-enquiry-property/new-enquiry-property.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEnquiryComponent,
    NewEnquiryCityComponent,
    NewEnquiryAreaComponent,
    NewEnquiryPropertyComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
