import { createStackNavigator, createAppContainer } from 'react-navigation'

import { colors, fonts } from './styles/index'
import Login from './pages/Login/index'

const RootStack = createStackNavigator(
  {
    Home: {
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
