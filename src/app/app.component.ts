import { Component } from '@angular/core';
import {MemeHttpService} from "./services/MemeHttp/meme-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private memeHttpService: MemeHttpService) {
  }

}
