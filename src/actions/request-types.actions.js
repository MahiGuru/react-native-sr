import axios from 'axios';
import Storage from '../store/storage';
import { getUserDetail, getCredentialsWithUrls } from '../core/common/common.service';

export const request_type_action_creator = () => {
    return async (dispatch, getState) => {
      console.log("INSIDE ACTION REUEST TYPE");
      const user = await getUserDetail();
      console.log("USER DETAILS ", user);
      dispatch(fetch_user(user.data));
      if(user) {
        console.log('userDetail >>>> ', user);
        await Storage.setItem('user', user.data);
        // Below If condition for get the list to bind
        if (user && user.data.profileId) {
          requestTypes = await getRequestTypeList(user.data.profileId);
          console.log('requestTypes >>>>> ', requestTypes);
          dispatch(fetch_request_types(requestTypes.data))
        }

      }
    }
}

const getRequestTypeList = async (profileId) => {
  const url = await getCredentialsWithUrls('getRequestTypesByProfile', true, 'id', profileId);
  return axios.get(url);
  
}


export const fetch_request_types = (data) => {
    return {
      type: "FETCH_REQUEST_TYPES",
      data
    };
  };
   
  
export const fetch_user = (data) => {
  return {
    type: "FETCH_USER_DETAIL",
    data
  };
};
 
  export const receive_error = (data) => {
    return {
      type: "RECEIVE_ERROR",
      data
    };
  };