import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation'

import HomeScreen from './home'
import LoginScreen from './login'
import SignInScreen from './signIn'
import HistoryScreen from './history'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen
})

export default AppNav = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeStack,
  SignIn: SignInScreen
}, {
  initialRouteName: 'Login'
})
