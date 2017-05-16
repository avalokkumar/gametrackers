import {Component, OnInit, Input} from '@angular/core';
import {GamesService} from "../shared/games.service";
import {Game} from "../shared/game.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GamesService]
})
export class GameComponent implements OnInit {
  gameId: string;
  selectedGame: Game;

  constructor(private route: ActivatedRoute, private gameService: GamesService){
  }

  setSelectedGame(){
    this.gameId = this.route.snapshot.params['id'];
    this.gameService.getSelectedGame(this.gameId)
      .subscribe();
    this.selectedGame = this.gameService.selGame;
    console.log(this.selectedGame)
  }
  ngOnInit() {
    this.setSelectedGame();
    console.log(this.gameId);
  }

}
