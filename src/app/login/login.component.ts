import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials;
  constructor() { }

  ngOnInit() {
    this.credentials = {
      username: 'abc',
      email: 'abc@abc.com',
      pwd: '@bc'
    };
  }

}
