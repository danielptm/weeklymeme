import {Meme} from "../../../model/meme";
import * as MemeActions from "./last-week.actions";

let memes: Meme[] = [];

const initialState = {
  memes: memes
}
export function LastWeekReducer(state = initialState, action: MemeActions.AddMemes  ) {
  switch(action.type) {
    case MemeActions.ADD_MEMES:
      return {
        ...state,
        memes: [...state.memes, action.payload]
      };
    default:
      return {
        ...state,
        memes: []
      }
  }
}
