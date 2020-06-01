import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThisWeekComponent} from "./public/this-week/this-week.component";
import {LastWeekComponent} from "./public/last-week/last-week.component";
import {LoginComponent} from "./private/login/login.component";
import {ProfileComponent} from "./private/profile/profile.component";
import {AuthGuardService} from "./services/authorization-guard/auth.service";


const routes: Routes = [
  { path: '',   redirectTo: '/this-week', pathMatch: 'full' },
  {path: 'this-week', component: ThisWeekComponent},
  {path: 'last-week', component: LastWeekComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
