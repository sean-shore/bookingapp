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

  // tslint:disable-next-line:typedef
  authenticate(username, password) {
    const data = {username, password};
    const body = new HttpParams({fromObject: data});
    // console.log(environment.apiUrl + environment.authEndpoint, body.toString(), this.httpOptions);
    return this.http.post(environment.apiUrl + environment.authEndpoint, body.toString(), this.httpOptions)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.isLoggedin = true;
      });
  }

  // tslint:disable-next-line:typedef
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.isLoggedin = false;
    }
    else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    this.isLoggedin = false;
  }
}
