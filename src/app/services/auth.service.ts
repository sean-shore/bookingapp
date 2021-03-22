import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiConstant } from '..';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  baseUrl: string;

  constructor(
    private httpClient:HttpClient,
  ) { }

  login(credentials, done: (token: string) => void, fail: (err: any) => void) {
    this.setBaseURL(credentials.username, credentials.password);
    let authUrl = `${this.baseUrl}/auth?username=${credentials.username}&password=${credentials.password}`;
  }



}
