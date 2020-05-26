import {Meme} from "../../../model/meme";
import {Action} from '@ngrx/store';
import * as MemeActions from "./last-week.actions";

let memes: Meme[] = [
  new Meme('1', 1, '1'),
  new Meme('2', 2, '2')
];

const initialState = {
  memes: memes
}
export function LastWeekReducer(state = initialState, action: MemeActions.AddMeme) {
  switch(action.type) {
    case MemeActions.ADD_MEME:
      return {
        ...state,
        memes: [...state.memes, action.payload]
      };
  }
  // return {
  //   ...state,
  //   memes: [...state.memes, action.payload]
  // };
}
