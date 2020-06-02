import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Meme} from "../../model/meme";
import {Observable} from "rxjs";
import {AddMemes} from "./store/last-week.actions";

@Component({
  selector: 'app-last-week',
  templateUrl: './last-week.component.html',
  styleUrls: ['./last-week.component.scss']
})
export class LastWeekComponent implements OnInit {

  constructor(private store: Store<{lastWeek: {memes: Meme[]}}>) { }

  winner = new Meme('1', 'hi', 12, 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

  memes: Observable<{memes: Meme[]}>;

  ngOnInit(): void {
    this.memes = this.store
      .select('lastWeek');
  }
}
