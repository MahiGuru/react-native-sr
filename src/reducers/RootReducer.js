import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: []
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const friendReducer2 = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  friends: friendReducer
});
