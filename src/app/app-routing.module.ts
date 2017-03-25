import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./PageNotFoundComponent";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {GamesComponent} from "./games/games.component";
import {GameComponent} from "./games/game/game.component";
import {SysrequirementsComponent} from "./sysrequirements/sysrequirements.component";
import {SysrequirementComponent} from "./sysrequirements/sysrequirement/sysrequirement.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {ReviewComponent} from "./reviews/review/review.component";


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'dashboard',},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/:id', component: GameComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'reviews/:id', component: ReviewComponent},
  {path: 'sysrequirements', component: SysrequirementsComponent},
  {path: 'sysrequirements/:id', component: SysrequirementComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
