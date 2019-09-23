import React from 'react';
import AppNavigator from './src/stacks/AppNavigator';
import { Provider } from 'react-redux'; 
import { createAppContainer } from 'react-navigation'; 
import store from './src/store/store';
/**
 * For Initialization
 */
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
   
  render() {
    return (
      <Provider store={store}> 
        <AppContainer />
      </Provider>
    );
  }
}
