"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var core_module_1 = require('./core/core.module');
var app_component_1 = require('./app.component');
var admin_component_1 = require('./admin/admin.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var games_component_1 = require('./games/games.component');
var login_component_1 = require('./login/login.component');
var models_component_1 = require('./models/models.component');
var reviews_component_1 = require('./reviews/reviews.component');
var shared_component_1 = require('./shared/shared.component');
var user_component_1 = require('./user/user.component');
var core_component_1 = require('./core/core.component');
var sysrequirements_component_1 = require('./sysrequirements/sysrequirements.component');
var nav_component_1 = require('./core/nav/nav.component');
var app_routing_module_1 = require("./app-routing.module");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var games_module_1 = require("./games/games.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var sysrequirements_module_1 = require("./sysrequirements/sysrequirements.module");
var reviews_module_1 = require("./reviews/reviews.module");
var footer_component_1 = require("./core/footer/footer.component");
var sysrequirement_component_1 = require("./sysrequirements/sysrequirement/sysrequirement.component");
/*import {AUTH_PROVIDERS} from 'angular2-jwt';*/
var auth_service_1 = require('./login/auth/auth.service');
var downloads_component_1 = require('./downloads/downloads.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                admin_component_1.AdminComponent,
                dashboard_component_1.DashboardComponent,
                games_component_1.GamesComponent,
                login_component_1.LoginComponent,
                models_component_1.ModelsComponent,
                reviews_component_1.ReviewsComponent,
                shared_component_1.SharedComponent,
                user_component_1.UserComponent,
                core_component_1.CoreComponent,
                sysrequirement_component_1.SysrequirementComponent,
                sysrequirements_component_1.SysrequirementsComponent,
                nav_component_1.NavComponent,
                PageNotFoundComponent_1.PageNotFoundComponent,
                footer_component_1.FooterComponent,
                downloads_component_1.DownloadsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                games_module_1.GamesModule,
                dashboard_module_1.DashboardModule,
                sysrequirements_module_1.SysrequirementsModule,
                reviews_module_1.ReviewsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                core_module_1.CoreModule
            ],
            providers: [auth_service_1.Auth],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
