import {Action} from '@ngrx/store';
import {Meme} from "../../../model/meme";

export const ADD_THIS_WEEKS_MEMES = 'ADD_THIS_WEEKS_MEMES';
export const ADD_WEEKLY_MEMES = 'ADD_WEEKLY_MEMES';

export class AddThisWeeksMemes implements Action {
  readonly type = ADD_THIS_WEEKS_MEMES;
  payload: Meme[];
}

export class AddWeeklyMemes implements Action {
  readonly type = ADD_WEEKLY_MEMES;
  payload: Meme[];
}

