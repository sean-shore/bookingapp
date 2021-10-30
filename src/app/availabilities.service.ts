import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AvailabilitiesService {
  BASE_URL = 'https://api.rerumapp.uk/api/v1';
  SLASH = '/';
  AVAILABILITIES_ENDPOINT = 'availabilities';
  AVAILABILITIES_PROPERTY = 'availabilities/property';
  AVAILABILITIES_CITY = 'availabilities/city';
  AVAILABILITIES_AREA = 'availabilities/area';
  GROUPING = 'UNIT_TYPE'

  constructor(private http: HttpClient) { }

  availabilities(dateFrom: string, dateTo: string, propertyType: string) {
    const availability = {
      dateFrom,
      dateTo,
      propertyType
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    this.http.post(this.BASE_URL + this.SLASH + this.AVAILABILITIES_ENDPOINT + this.SLASH, availability,
      {headers: headers}).subscribe((data) => {
        console.log(data);
    })
  }

}