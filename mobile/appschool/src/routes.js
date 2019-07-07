import { createStackNavigator, createAppContainer } from 'react-navigation'

import { colors, fonts } from './styles/index'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import News from './pages/News/index'
import MainMenu from './pages/MainMenu/index'
import Attendance from './pages/Attendance/index'
import Students from './pages/Students/index'
import History from './pages/History/index'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },

    Login: {
      screen: Login
    },

    News: {
      screen: News
    },

    MainMenu: {
      screen: MainMenu
    },

    Attendance: {
      screen: Attendance
    },

    Students: {
      screen: Students
    },

    History: {
      screen: History
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
