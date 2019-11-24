import { GET_DEPARTMENT } from '../actions-types';
import { DepartmentResponse } from '../../interface/department';
type State = Readonly<{
  departmentList: DepartmentResponse
}>;
interface Action {
  type: string;
  payload: any;
}
const initialState: State = {
  departmentList: undefined
}
export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_DEPARTMENT:
      return {
        ...state,
        departmentList: action.payload
      }
    default:
      return state
  }
}