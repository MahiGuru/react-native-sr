import axios from 'axios';

export const request_type_action_creator = () => {
    return (dispatch, getState) => {
        return axios.get('https://reqres.in/api/users/2')
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