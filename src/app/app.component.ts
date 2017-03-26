import { Component } from '@angular/core';
import {FooterComponent} from "./core/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openWindow(){
    console.log("Open a window");
  }

}
