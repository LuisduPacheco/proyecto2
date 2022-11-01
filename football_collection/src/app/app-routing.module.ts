import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthenticateGuard } from './authenticate.guard';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', canActivate:[AuthenticateGuard], component: HomeComponent},
  { path: 'team', canActivate:[AuthenticateGuard], component: TeamsComponent},
  { path: 'player', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
