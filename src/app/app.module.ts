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
    SysrequirementsComponent,
    NavComponent,
    PageNotFoundComponent,
    FooterComponent
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
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
