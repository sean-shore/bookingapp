import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AvailabilitiesService} from "../../shared/availabilities.service";

@Component({
  selector: 'app-new-enquiry-form',
  templateUrl: './new-enquiry-form.component.html',
  styleUrls: ['./new-enquiry-form.component.css'],
})
export class NewEnquiryFormComponent implements OnInit {
  startDate: string;
  endDate: string;
  propertyType: string;
  city: string;
  area: string;
  property: string;
  grouping = "UNIT_TYPE"

  setDate(date, e) {
    date === "start" ? (this.startDate = e) : (this.endDate = e);
    this.printDate();
  }
  printDate() {
    console.log(this.startDate);
    console.log(this.endDate);
  }

  constructor(
    public router: Router,
    public availabilitiesService: AvailabilitiesService,
  ) { }

  ngOnInit(): void {}


  getAvailability() {
    this.availabilitiesService.availabilities(this.startDate, this.endDate, this.grouping)
  }

}

