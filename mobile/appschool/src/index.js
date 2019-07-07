import { StatusBar, View } from 'react-native'
import React from 'react'
import Routes from './routes'

import { colors } from './styles/index'

const App = () => (
  <>
    <StatusBar backgroundColor={ colors.darker } barStyle='light-content' />
    <Routes/>
  </>
)

export default App;
