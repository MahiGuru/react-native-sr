import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createAppContainer } from 'react-navigation';
import { rootReducer } from './src/reducers/RootReducer';
/**
 * For Initialization
 */
const AppContainer = createAppContainer(AppNavigator);
const store = createStore(rootReducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
