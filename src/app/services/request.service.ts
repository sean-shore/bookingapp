import { Injectable } from '@angular/core';
import { ApiConstant, AuthService } from "./";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient:HttpClient,
    private authService: AuthService) {

  }

  createAuthorizationHeader() {
    let token = this.authService.getToken();
    let headers = new Headers();
    headers.append(ApiConstant.xAuthToken, token);
    return headers;
  }

  endpoint(url: string) {
    if (url.indexOf(ApiConstant.slash) !=0) {
      return this.authService.getBaseUrl() + ApiConstant.slash + url;
    } else {
      return this.authService.getBaseUrl + url;
    }
  }

  get(url) {
    console.log('[GET] ' + this.endpoint(url));
    return this.httpClient.get(this.endpoint(url), {
      headers: this.createAuthorizationHeader()
    });
  }

  post(url, data) {
    return this.httpClient.post(this.endpoint(url), data, {
      headers: this.createAuthorizationHeader()
    });
  }

}
