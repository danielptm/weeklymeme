import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThisWeekComponent} from "./public/this-week/this-week.component";
import {LastWeekComponent} from "./public/last-week/last-week.component";
import {LoginComponent} from "./private/login/login.component";


const routes: Routes = [
  {path: 'this-week', component: ThisWeekComponent},
  {path: 'last-week', component: LastWeekComponent},
  {path: 'profile', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
