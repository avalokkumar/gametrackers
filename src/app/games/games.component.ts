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
  message: String;

  constructor(private gamesService: GamesService) { }

  //TODO: create service for loading games details
  ngOnInit() {
    this.retrieveGames();
  }

  showMsg(){
    this.gamesService.getMessage()
      .subscribe(msg => this.message = msg);
  }

  retrieveGames(){
    this.gamesService.getAllGames()
      .subscribe(games => this.games = games);
    console.log('Inside Retrieve Games');
    console.log(this.games)
  }

}
