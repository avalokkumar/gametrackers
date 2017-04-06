import { Component, OnInit } from '@angular/core';
import {GamesService} from './shared/games.service';
import {Game} from "./shared/game.model";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})
export class GamesComponent implements OnInit {
  games: Game[];
  errorMessage;
  constructor(private gamesService: GamesService) { }

  //TODO: create service for loading games details
  ngOnInit() {
    //this.games = ["Crysis 3", "Medal Of Honour", "Half Life 3", "Grand Theft Auto V","Darksiders 3", "CS GO", "Need for Speed", "Uncharted 3"];
    this.retrieveGames();
  }

  retrieveGames(){
    this.gamesService.getAllGames()
      .subscribe(games => this.games = games);
    console.log('Inside Retrieve Games');
    console.log(this.games)
  }

}
