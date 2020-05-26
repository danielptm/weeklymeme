import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MemeHttpService} from "./services/MemeHttp/meme-http.service";
import {HttpClientModule} from "@angular/common/http";
import {ThisWeekComponent} from './public/this-week/this-week.component';
import {LastWeekComponent} from './public/last-week/last-week.component';
import {CardComponent} from './ui/card/card.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {StoreModule} from '@ngrx/store';
import {LastWeekReducer} from './public/last-week/store/last-week.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ThisWeekComponent,
    LastWeekComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({lastWeek: LastWeekReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    MemeHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
