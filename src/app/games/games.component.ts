import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games;
  constructor() { }

  //TODO: create service for loading games details
  ngOnInit() {
    this.games = ["Crysis 3", "Medal Of Honour", "Half Life 3", "Grand Theft Auto V","Darksiders 3", "CS GO", "Need for Speed", "Uncharted 3"];
  }

}
