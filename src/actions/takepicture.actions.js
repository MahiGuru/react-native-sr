import axios from 'axios';
import Storage from '../store/storage';
import { getCredentialsWithUrls} from '../core/common/common.service';

export const view_picture_action_creator = (data) => {
    return (dispatch, getState) => {
      dispatch(fetch_view_picture(data))
    }
}
 
export const detail_picture_action_creator = (data) => {
  return (dispatch, getState) => {
    dispatch(fetch_detail_picture(data))
  }
}

export const fetch_view_picture = (data) => {
  return {
    type: "FETCH_VIEW_PICTURE",
    data
  };
};

export const fetch_detail_picture = (data) => {
  return {
    type: "FETCH_DETAIL_PICTURE",
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