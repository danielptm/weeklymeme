import {Meme} from "../../../model/meme";
import * as MemeActions from "./this-week.actions";

let memesCreated: Meme[] = [];
let weeklyMemes: Meme[] = [];

const initialState = {
  weeklyMemes: weeklyMemes,
  memesCreated: memesCreated
}
export function LastWeekReducer(state = initialState, action: MemeActions.AddMeme) {
  switch(action.type) {
    case MemeActions.ADD_MEMES:
      return {
        ...state,
        memes: [...state.memesCreated, action.payload]
      };
    default:
      console.log('DEFAULT REDUCER running.');
      return {
        ...state,
        memes: []
      }
  }
}
