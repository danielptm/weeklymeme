import {Meme} from "../../../model/meme";
import * as MemeActions from "./last-week.actions";

let memes: Meme[] = [
  new Meme('daniel', 1, 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  new Meme('ted', 2, 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
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
}
