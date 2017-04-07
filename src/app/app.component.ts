import { Component } from '@angular/core';
import {Auth} from './login/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: Auth){}

  openWindow(){
    console.log("Open a window");
  }

}
