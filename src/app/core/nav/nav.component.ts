import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'Gametrackers';
  gamesUrls = [
    "../../images/header1.png",
    "../../images/header2.jpg",
    "../../images/header3.jpg",
    "../../images/header4.jpg",
    "../../images/header5.jpg",
    "../../images/header6.jpg",
    "../../images/header7.jpg"
  ]
  constructor() { }

  ngOnInit() {
  }

}
