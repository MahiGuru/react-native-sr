import axios from 'axios';
import Storage from '../store/storage';
import { getUserDetail, getCredentialsWithUrls } from '../core/common/common.service';

export const request_type_action_creator = () => {
    return async (dispatch, getState) => {
      console.log("INSIDE ACTION REUEST TYPE");
      const user = await getUserDetail();
      if(user) {
        console.log('userDetail >>>> ', user);
        await Storage.setItem('user', user.data);
        // Below If condition for get the list to bind
        if (user && user.data.profileId) {
          requestTypes = await getRequestTypeList(user.data.profileId);
          console.log('requestTypes >>>>> ', requestTypes);
          dispatch(fetch_users(requestTypes.data))
        }

      }
    }
}

const getRequestTypeList = async (profileId) => {
  const url = await getCredentialsWithUrls('getRequestTypesByProfile', true, 'id', profileId);
  return axios.get(url);
  
}


export const fetch_users = (data) => {
    return {
      type: "FETCH_USER",
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