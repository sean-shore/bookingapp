import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'new-enquiry', component: NewEnquiryComponent },
  { path: 'new-enquiry-city', component: NewEnquiryComponent },
  { path: 'new-enquiry-area', component: NewEnquiryComponent },
  { path: 'new-enquiry-property', component: NewEnquiryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
