import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

export default styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darker,
    justifyContent:'space-around'
  },

  list_container: {
    backgroundColor: colors.button,
    margin: 10,
    elevation:1
  },

  list_item: {
    margin: 10,
    marginTop:-10,
    backgroundColor: colors.button,
    padding: 20
  },

  list_text: {
    fontSize: 14,
    color: colors.lighter,
    marginRight:10
  },

  subcontainer: {
    flex: 1,
    flexDirection: 'row',
  }

})
