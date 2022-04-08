import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedin = false;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string) {
    const data = {username, password};
    const body = new HttpParams({fromObject: data});
    console.log(environment.apiUrl + environment.authEndpoint, body.toString(), this.httpOptions);
    return this.http.post<{ apiToken: string }>(environment.apiUrl + environment.authEndpoint, body.toString(),
      this.httpOptions)
      .subscribe(response => {
        const apiToken = response.apiToken;
        localStorage.setItem('token', apiToken);
        console.log(response);
      });
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.isLoggedin = true;
    }
    else {
      return this.isLoggedin = false;
    }
    console.log(this.isLoggedin);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}
