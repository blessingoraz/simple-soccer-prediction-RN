import { createStackNavigator } from 'react-navigation'
import { StatusBar } from 'react-native'

// Screens
import HomeScreen from '../screens/Home/home'
import LoginScreen from '../screens/Auth/login'
import HistoryScreen from '../screens/History/history'

export default createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  Home: HomeScreen,
  History: HistoryScreen
},{
  initialRouteName: 'Login',
  cardStyle: { paddingTop: StatusBar.currentHeight }
})

