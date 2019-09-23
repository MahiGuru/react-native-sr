import axios from 'axios';
import store from "../store/store";

export const user_action_creator = () => {
    return (dispatch, getState) => {
        return axios.get('https://reqres.in/api/users?page=1')
                    .then(response => {
                        dispatch(fetch_users(response.data))
                    })
                    .catch(error => {
                        dispatch(receive_error(error))
                    console.log(error);
                    });
    }
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