import { 
  GET_EMPLOYEE, 
  CREATE_EMPLOYEE, 
  DELETE_EMPLOYEE, 
  UPDATE_EMPLOYEE 
} from '../actions-types'
import { get, post, deleteUrl, patch} from '../../utils/request';
import { Dispatch} from 'redux';
import moment from 'moment';
import {
  GET_EMPLOYEE_URL,
  CREATE_EMPLOYEE_URL,
  UPDATE_EMPLOYEE_URL,
  DELETE_EMPLOYEE_URL
} from '../../constants/urls';
import {
  EmployeeRequest,
  CreateRequest,
  UpdateRequest,
  DeleteRequest,
  EmployeeInfo
} from '../../interface/employee';
import { DepartmentInfo } from '../../interface/department';
import { LevelInfo } from '../../interface/level';
// 获取员工列表
export function getEmployee(param: EmployeeRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    get(GET_EMPLOYEE_URL, param).then(res => {
      console.log(res)
      let list = res.data.list;
      list.forEach((item: EmployeeInfo) => {
        item.hiredate = moment(item.hiredate).format('YYYY-MM-DD')
      })
      dispatch({
        type: GET_EMPLOYEE,
        payload: list
      })
      callback();
    })
  }
}
// 创建员工
export function createEmployee(param: CreateRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    post(CREATE_EMPLOYEE_URL, param).then(res => {
      res.data.hiredate = moment(res.data.hiredate).format('YYYY-MM-DD')
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data
      })
    })
    callback();
  }
}
// 删除员工
export function deleteEmployee(param: DeleteRequest) {
  return (dispatch: Dispatch) => {
    deleteUrl(`${DELETE_EMPLOYEE_URL}/${param._id}`).then(res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: param._id
      })
    })
  }
}
// 更新员工
export function updateEmployee(param: UpdateRequest, callback: () => void) {
  return (dispatch: Dispatch, getState: any) => {
    patch(`${UPDATE_EMPLOYEE_URL}/${param._id}`, param).then(res => {
     let department = getState().department.departmentList.filter((item:DepartmentInfo) => {
       return item._id === param.departmentId
     })
     let level = getState().level.levelList.filter((item: LevelInfo) => {
       return item._id === param.levelId
     })
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: {
          ...param,
          departmentName: department[0].name,
          levelName: level[0].name
        }
      });
      callback();
    })
  }
}
