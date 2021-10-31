import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrls: ['./new-enquiry.component.css'],

})
export class NewEnquiryComponent implements OnInit {
  titleNewEnquiry = 'New Enquiry';
  titleNewEnquiryArea = 'New Enquiry by Area';
  titleNewEnquiryCity = 'New Enquiry by City';
  titleNewEnquiryProperty = 'New Enquiry by Property'

 constructor(public router: Router) {
 }

  ngOnInit(): void {
  }

}
