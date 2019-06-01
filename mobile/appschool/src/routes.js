import { createStackNavigator, createAppContainer } from 'react-navigation'

import { colors, fonts } from './styles/index'
import Home from './pages/Home/index'
import Login from './pages/Login/index'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    }
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: colors.darker,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: colors.white
    }
  }
)

export default createAppContainer(RootStack)
