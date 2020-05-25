import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MemeHttpService} from "./services/MemeHttp/meme-http.service";
import {HttpClientModule} from "@angular/common/http";
import { ThisWeekComponent } from './public/this-week/this-week.component';
import { LastWeekComponent } from './public/last-week/last-week.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisWeekComponent,
    LastWeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MemeHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
