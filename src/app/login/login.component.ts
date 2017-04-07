import { Component, OnInit } from '@angular/core';
import {Auth} from './auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials;
  constructor(private auth: Auth) { }

  ngOnInit() {
    this.credentials = {
      username: 'abc',
      email: 'abc@abc.com',
      pwd: '@bc'
    };
  }

}
