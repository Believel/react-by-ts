import { GET_DEPARTMENT } from '../actions-types';
import { GET_DEPARTMENT_URL } from '../../constants/urls';
import { get } from '../../utils/request';
import { Dispatch } from 'redux';

export function getDepartment(callback?: () => void) {
  return (dispatch: Dispatch) => {
    get(GET_DEPARTMENT_URL, {}).then(res => {
      dispatch({
        type: GET_DEPARTMENT,
        payload: res.data
      })
      callback && callback();
    })
  }
}