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
import { TwoItemGridComponent } from './ui/layout/two-item-grid/two-item-grid.component';
import { FourItemGridComponent } from './ui/layout/four-item-grid/four-item-grid.component';
import {LoginComponent} from "./private/login/login.component";
import { CenterPieceComponent } from './ui/layout/center-piece/center-piece.component';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ProfileComponent } from './private/profile/profile.component';
import { UserInfoComponent } from './ui/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisWeekComponent,
    LastWeekComponent,
    CardComponent,
    TwoItemGridComponent,
    FourItemGridComponent,
    CenterPieceComponent,
    LoginComponent,
    UserLoginComponent,
    ProfileComponent,
    UserInfoComponent
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
