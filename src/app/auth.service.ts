import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'https://api.rerumapp.uk/api/v1';
  SLASH = '/';
  AUTH_ENDPOINT = 'auth';

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string) {
    const credentials = {
      username,
      password,
    };
    this.http.post(this.BASE_URL + this.SLASH + this.AUTH_ENDPOINT, credentials).subscribe((res:any) => {
      localStorage.setItem('token', res.token);
    })
  }
};

