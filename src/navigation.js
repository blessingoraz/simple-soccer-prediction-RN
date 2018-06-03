import React from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator 
} from 'react-navigation';

import HomeScreen from './home';
import LoginScreen from './login';
import SignInScreen from './signIn';

export default AppNav = createSwitchNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    SignIn: SignInScreen
  }, {
    initialRouteName: 'Home'
  });