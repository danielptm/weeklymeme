import {Action} from '@ngrx/store';
import {Meme} from "../../../model/meme";

export const ADD_MEME = 'ADD_MEME';
export class AddMeme implements Action {
  readonly type = ADD_MEME;
  payload: Meme;
}
