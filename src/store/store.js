

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import thunk from 'redux-thunk';
import './interceptor';

export default store = createStore(rootReducer, applyMiddleware(thunk));