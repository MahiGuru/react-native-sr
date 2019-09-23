import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const INITIAL_STATE = {
  current: []
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  friends: friendReducer,
  users: userReducer
});
