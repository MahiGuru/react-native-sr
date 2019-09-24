import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import requestTypesReducer from './request-types.reducer';

const INITIAL_STATE = {
  current: []
};

export const rootReducer = combineReducers({
  users: userReducer,
  requestTypes: requestTypesReducer
});
