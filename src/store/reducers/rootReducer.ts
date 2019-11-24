import { combineReducers } from 'redux';
import employeeReducer from './employee';
import departmentReducer from './department';
import levelReducer from './level';
const reducers = {
  employee: employeeReducer,
  department: departmentReducer,
  level: levelReducer
}
export default combineReducers(reducers);