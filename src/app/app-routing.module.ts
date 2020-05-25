import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThisWeekComponent} from "./public/this-week/this-week.component";
import {LastWeekComponent} from "./public/last-week/last-week.component";


const routes: Routes = [
  {path: 'this-week', component: ThisWeekComponent},
  {path: 'last-week', component: LastWeekComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
