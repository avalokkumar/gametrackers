import { Component, OnInit } from '@angular/core';
import {GamesService} from "../shared/games.service";
import {Game} from "../shared/game.model";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GamesService]
})
export class GameComponent implements OnInit {
  game: Game;
  ngOnInit() {
  }

}
