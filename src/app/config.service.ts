import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private rerumApi = 'https://api.rerumapp.uk/api/v1';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }
}
