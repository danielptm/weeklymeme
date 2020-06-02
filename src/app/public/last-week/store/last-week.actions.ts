import {Action} from '@ngrx/store';
import {Meme} from "../../../model/meme";

export const ADD_MEMES = 'ADD_MEMES';
export const ADD_WINNER = 'ADD_WINNER'

export class AddMemes implements Action {
  readonly type = ADD_MEMES;
  payload: Meme;
}

export class AddWinner implements Action {
  readonly type = ADD_WINNER;
  payload: Meme;
}
