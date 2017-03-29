import { Component, OnInit } from '@angular/core';
import {GamesService} from './shared/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})
export class GamesComponent implements OnInit {
  games;
  errorMessage;
  constructor(private gamesService: GamesService) { }

  //TODO: create service for loading games details
  ngOnInit() {
    //this.games = ["Crysis 3", "Medal Of Honour", "Half Life 3", "Grand Theft Auto V","Darksiders 3", "CS GO", "Need for Speed", "Uncharted 3"];
    this.retrieveGames();
    console.log(this.games);
  }

  retrieveGames(){
    this.gamesService.getAllGames()
      .subscribe(
        games => this.games = games,
        error => this.errorMessage = <any>error
      )
  }

}
