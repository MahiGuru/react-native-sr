import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import requestTypesReducer from './request-types.reducer';
import vocabularyReducer from './vocabulary.reducer';
import tasksReducer from './tasks.reducer';
import {assetReducer, assetDetailsReducer} from './asset.reducer';
import equipmentsReducer from './equipments.reducer';
import takepictureReducer from './takepicture.reducer';
const INITIAL_STATE = {
  current: []
};

export const rootReducer = combineReducers({
  vocabulary: vocabularyReducer,
  asset: assetReducer,
  assetDetails: assetDetailsReducer,
  user: userReducer,
  requestTypes: requestTypesReducer,
  tasks: tasksReducer,
  equipments: equipmentsReducer,
  pictures: takepictureReducer
});
