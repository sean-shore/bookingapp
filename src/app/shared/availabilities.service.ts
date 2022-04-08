import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AvailabilitiesService implements OnInit {
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  // };
  availabilityData;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   availabilities(dateFrom: string, dateTo: string, grouping: string) {
//     this.http.get(environment.apiUrl + environment.availabilitiesEndpoint + '?' + 'dateFrom=' + dateFrom + '&'
//       + 'dateTo=' + dateTo + '&' + 'grouping=' + grouping )
//       .subscribe(data => {
//         console.log(data)
//         this.availabilityData = data
//       })
//   }
// }


  availabilities(dateFrom: string, dateTo: string, grouping: string) {
    let params = new HttpParams();
    params = params.append('dateFrom', dateFrom)
    params = params.append('dateTo', dateTo)
    params = params.append('grouping', grouping)
    return this.http.get(environment.apiUrl + environment.availabilitiesEndpoint, {params: params})
      .subscribe(data => {
        console.log(data)
        this.availabilityData = data;
      });
  }
}
