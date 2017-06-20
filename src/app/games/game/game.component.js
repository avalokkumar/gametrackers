"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var games_service_1 = require("../shared/games.service");
var GameComponent = (function () {
    function GameComponent(route, gameService) {
        this.route = route;
        this.gameService = gameService;
    }
    GameComponent.prototype.setSelectedGame = function () {
        var _this = this;
        this.gameId = this.route.snapshot.params['id'];
        this.gameService.getSelectedGame(this.gameId)
            .subscribe(function (games) { return _this.selectedGame = games[0]; });
        // this.selectedGame = this.gameService.selGame;
        /*console.log(this.selectedGame)*/
    };
    GameComponent.prototype.ngOnInit = function () {
        this.setSelectedGame();
        console.log(this.gameId);
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css'],
            providers: [games_service_1.GamesService]
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
