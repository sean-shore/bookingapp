import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-enquiry-property',
  templateUrl: './new-enquiry-property.component.html',
  styleUrls: ['./new-enquiry-property.component.css']
})
export class NewEnquiryPropertyComponent implements OnInit {
  title = 'New Enquiry by Property'

  constructor() { }

  ngOnInit(): void {
  }

}
