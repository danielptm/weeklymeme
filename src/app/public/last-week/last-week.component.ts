import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Meme} from "../../model/meme";
import {Observable} from "rxjs";
import {AddMeme} from "./store/last-week.actions";

@Component({
  selector: 'app-last-week',
  templateUrl: './last-week.component.html',
  styleUrls: ['./last-week.component.scss']
})
export class LastWeekComponent implements OnInit {

  constructor(private store: Store<{lastWeek: {memes: []}}>) { }

  winner: Meme;
  memes: Observable<{memes: Meme[]}>;

  ngOnInit(): void {
    this.memes = this.store.select('lastWeek');

    setTimeout(() => {
      let meme = new Meme('10', 10, '10');
      let addMeme = new AddMeme();
      addMeme.payload = meme;
      this.store.dispatch(addMeme)
    }, 5000)
    setTimeout(() => {
      let meme = new Meme('20', 20, '20');
      let addMeme = new AddMeme();
      addMeme.payload = meme;
      this.store.dispatch(addMeme)
    }, 10000)
  }
}
