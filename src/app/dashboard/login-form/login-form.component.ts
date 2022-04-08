import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    public authService: AuthService) {
  }

  login() {
    this.authService.authenticate(this.username, this.password);
  }

  ngOnInit(): void {
  }
}
