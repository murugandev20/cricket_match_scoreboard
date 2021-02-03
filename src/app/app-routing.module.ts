import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewScoreBoardComponent } from './view-score-board/view-score-board.component';
import { SubmitScoresComponent } from './submit-scores/submit-scores.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'view-score-board/:id', component: ViewScoreBoardComponent },
  { path: 'add-scores', component: SubmitScoresComponent },
  { path: 'create-team', component: CreateTeamsComponent },
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
