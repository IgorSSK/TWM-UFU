import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

export default styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darker,
    justifyContent:'space-around'
  },

  list_container: {
    flex: 3,
    backgroundColor: colors.button,
    margin: 10
  },

  button:{
    backgroundColor: colors.bt_sucess,
    marginBottom: 10,
    marginTop: 10
  }
})
