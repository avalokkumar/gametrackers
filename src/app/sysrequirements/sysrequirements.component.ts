import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games/shared/games.service";
import {Game} from "../games/shared/game.model";

@Component({
  selector: 'app-sysrequirements',
  templateUrl: './sysrequirements.component.html',
  styleUrls: ['./sysrequirements.component.css'],
  providers: [GamesService]
})
export class SysrequirementsComponent implements OnInit {
  games: Game[];
  selectedGame;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getAllGames()
      .subscribe(games => this.games = games);
  }

  selectGame(game){
    console.log('Selected Game: '+game.name);
    this.selectedGame = game;
  }
}
