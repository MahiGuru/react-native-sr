import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import requestTypesReducer from './request-types.reducer';
import authenticateReducer from './authenticate.reducer';
import tasksReducer from './tasks.reducer';
import assetReducer from './asset.reducer';
const INITIAL_STATE = {
  current: []
};

export const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  tasks: tasksReducer,
  users: userReducer,
  asset: assetReducer,
  requestTypes: requestTypesReducer
});
