import React from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator 
} from 'react-navigation';

import HomeScreen from './home';
import LoginScreen from './login';

export default AppNav = createSwitchNavigator({
    Login: LoginScreen,
    Home: HomeScreen
  }, {
    initialRouteName: 'Login'
  });