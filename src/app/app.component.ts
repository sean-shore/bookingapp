import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})
export class AppComponent {
  isAuthenticated: boolean;

  constructor(public authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}
