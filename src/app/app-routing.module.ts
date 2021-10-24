import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { NewEnquiryCityComponent } from './new-enquiry-city/new-enquiry-city.component';
import { NewEnquiryAreaComponent } from './new-enquiry-area/new-enquiry-area.component';
import { NewEnquiryPropertyComponent } from './new-enquiry-property/new-enquiry-property.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEnquiryFormComponent } from "./new-enquiry-form/new-enquiry-form.component";

const routes: Routes = [
  { path: 'new-enquiry', component: NewEnquiryComponent },
  { path: 'new-enquiry-city', component: NewEnquiryCityComponent },
  { path: 'new-enquiry-area', component: NewEnquiryAreaComponent },
  { path: 'new-enquiry-property', component: NewEnquiryPropertyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-enquiry-form', component: NewEnquiryFormComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
