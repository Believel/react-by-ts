import { GET_EMPLOYEE, CREATE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions-types'
import { EmployeeResponse, EmployeeInfo } from '../../interface/employee';
type State = Readonly<{
  employeeList: EmployeeResponse
}>
type Action = {
  type: string;
  payload: any;
}
const initialState: State = {
  employeeList: undefined
};
export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employeeList: action.payload
      }
    case CREATE_EMPLOYEE:
      let newList = [action.payload, ...(state.employeeList as EmployeeInfo[])];
      return {
        ...state,
        employeeList: newList
      }
    case UPDATE_EMPLOYEE:
      let updatedList = [...(state.employeeList as EmployeeInfo[])];
      let item
  }
}