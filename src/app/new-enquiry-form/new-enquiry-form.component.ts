import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-enquiry-form',
  templateUrl: './new-enquiry-form.component.html',
  styleUrls: ['./new-enquiry-form.component.css'],
})
export class NewEnquiryFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      startDate: '',
      endDate: ''
      }
    )
  }

}

