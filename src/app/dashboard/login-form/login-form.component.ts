import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService) {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
  }

  ngOnInit(): void {
  }
}
