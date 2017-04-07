"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var games_service_1 = require("../games/shared/games.service");
var SysrequirementsComponent = (function () {
    function SysrequirementsComponent(gamesService) {
        this.gamesService = gamesService;
    }
    SysrequirementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gamesService.getAllGames()
            .subscribe(function (games) { return _this.games = games; });
    };
    SysrequirementsComponent.prototype.selectGame = function (game) {
        console.log('Selected Game: ' + game.name);
        this.selectedGame = game;
    };
    SysrequirementsComponent = __decorate([
        core_1.Component({
            selector: 'app-sysrequirements',
            templateUrl: './sysrequirements.component.html',
            styleUrls: ['./sysrequirements.component.css'],
            providers: [games_service_1.GamesService]
        })
    ], SysrequirementsComponent);
    return SysrequirementsComponent;
}());
exports.SysrequirementsComponent = SysrequirementsComponent;
