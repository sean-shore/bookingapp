import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-new-enquiry-form',
  templateUrl: './new-enquiry-form.component.html',
  styleUrls: ['./new-enquiry-form.component.css'],
})
export class NewEnquiryFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      startDate: '',
      endDate: ''
      }
    )
  }

}

