import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SharedComponent } from './shared/shared.component';
import { UserComponent } from './user/user.component';
import { CoreComponent } from './core/core.component';
import { SysrequirementsComponent } from './sysrequirements/sysrequirements.component';
import { NavComponent } from './core/nav/nav.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./PageNotFoundComponent";
import {GamesModule} from "./games/games.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SysrequirementsModule} from "./sysrequirements/sysrequirements.module";
import {ReviewsModule} from "./reviews/reviews.module";
import {FooterComponent} from "./core/footer/footer.component";
import {SysrequirementComponent} from "./sysrequirements/sysrequirement/sysrequirement.component";
/*import {AUTH_PROVIDERS} from 'angular2-jwt';*/
import {Auth} from './login/auth/auth.service';
import { DownloadsComponent } from './downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    GamesComponent,
    LoginComponent,
    ModelsComponent,
    ReviewsComponent,
    SharedComponent,
    UserComponent,
    CoreComponent,
    SysrequirementComponent,
    SysrequirementsComponent,
    NavComponent,
    PageNotFoundComponent,
    FooterComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    DashboardModule,
    SysrequirementsModule,
    ReviewsModule,
    FormsModule,
    HttpModule,
    CoreModule
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
