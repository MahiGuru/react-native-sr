import axios from 'axios';
import Storage from '../store/storage';
import { getCredentialsWithUrls} from '../core/common/common.service';

export const task_action_creator = (requestId) => {
    return async (dispatch, getState) => {
        console.log("INSIDE ACTION TASK");
        tasks = await getTaskList(requestId);
        console.log('TASK >>>>> ', tasks);
        dispatch(fetch_users(tasks.data))
         
    }
} 

const getTaskList = async (requestTypeId) => {
    console.log('requestTypeId>>> ', requestTypeId);
  const url = await getCredentialsWithUrls('getTasksByRequestType', true, 'requestId', requestTypeId);
  console.log("MYURL", url);
  return axios.get(url);
  
}


export const fetch_users = (data) => {
    return {
      type: "FETCH_TASKS",
      data
    };
  };
  
  export const receive_post = post => {
    return {
      type: "FETCHED_USER",
      data: post
    };
  };
  
  export const receive_error = (data) => {
    return {
      type: "RECEIVE_ERROR",
      data
    };
  };