import axios from 'axios';
import Storage from '../store/storage';
import { getCredentialsWithUrls} from '../core/common/common.service';

export const user_action_creator = () => {
    return (dispatch, getState) => {
      const userDetail = await getUserDetail();
      if(userDetail) {
        await Storage.setItem('user', userDetail.data);
        dispatch(fetch_users(userDetail.data))
      }
        // return axios.get('https://reqres.in/api/users/1')
        //             .then(response => {
        //                 dispatch(fetch_users(response.data))
        //             })
        //             .catch(error => {
        //                 dispatch(receive_error(error))
        //             console.log(error);
        //             });
    }
}

const getUserDetail = async () => {
  const loggedUser = await Storage.get('username');
  const url = await getCredentialsWithUrls('getUserByIdentifier', true, 'id', loggedUser);
  return await axios.get(url);
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