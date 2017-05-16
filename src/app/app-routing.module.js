"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var games_component_1 = require("./games/games.component");
var game_component_1 = require("./games/game/game.component");
var sysrequirements_component_1 = require("./sysrequirements/sysrequirements.component");
var sysrequirement_component_1 = require("./sysrequirements/sysrequirement/sysrequirement.component");
var reviews_component_1 = require("./reviews/reviews.component");
var review_component_1 = require("./reviews/review/review.component");
var downloads_component_1 = require("./downloads/downloads.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'games', component: games_component_1.GamesComponent },
    { path: 'game/:id', component: game_component_1.GameComponent },
    { path: 'reviews', component: reviews_component_1.ReviewsComponent },
    { path: 'reviews/:id', component: review_component_1.ReviewComponent },
    { path: 'downloads', component: downloads_component_1.DownloadsComponent },
    { path: 'sysrequirements', component: sysrequirements_component_1.SysrequirementsComponent },
    { path: 'sysrequirement', component: sysrequirement_component_1.SysrequirementComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
