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

  list_item: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 10,
    backgroundColor: colors.button,
    padding: 20
  },

  list_text: {
    fontSize: 18,
    color: colors.white,
    maxHeight:100,
    maxWidth:'85%'
  },

  list_subtext: {
    fontSize: 14,
    color: colors.lighter,
    marginEnd:25,
    marginTop: 25

  },

  subcontainer: {
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between'
  },

  button:{
    backgroundColor: colors.bt_sucess,
    marginBottom: 10,
    marginTop: 10
  }
})
