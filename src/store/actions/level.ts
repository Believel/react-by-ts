import { GET_LEVEL} from '../actions-types';
import { GET_LEVEL_URL } from '../../constants/urls';
import { get } from '../../utils/request';
import { Dispatch } from 'redux';

// 查询级别
export function getLevel(callback?: () => void) {
  return (dispatch: Dispatch) => {
    get(GET_LEVEL_URL, {}).then(res => {
      dispatch({
        type: GET_LEVEL,
        payload: res.data
      })
      callback && callback();
    })
  }
}