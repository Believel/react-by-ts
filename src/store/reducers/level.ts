import {
  GET_LEVEL
} from '../actions-types';
import { LevelResponse } from '../../interface/level';
type State = Readonly<{
  levelList: LevelResponse;
}>;
interface Action {
  type: string;
  payload: any
}
const initialState: State = {
  levelList: undefined
}
export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_LEVEL:
      return {
        ...state,
        levelList: action.payload
      }
    default:
      return state;
  }
}