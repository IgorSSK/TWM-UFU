import { colors, fonts } from '../../styles/index'
import { StyleSheet } from 'react-native'
import { black } from 'ansi-colors';

export default styles = StyleSheet.create({
  container: {
    alignItems:'stretch',
    marginTop:5,
    margin:5,
    borderWidth:2,
    borderColor: colors.darker,
    borderRadius:10,
    elevation:1
  },

  header_container: {
    backgroundColor: colors.darker,
    justifyContent: 'center',
    alignItems:'center'
  },

  body_container: {
    backgroundColor: colors.white,
    maxHeight:'auto'

  },

  button_container: {
    marginTop: 18,
    padding:20,
    alignItems:'flex-end',
    borderTopWidth:1,
    borderColor: colors.primary_dark
  },

  title: {
    margin:10,
    fontSize:24,
    fontWeight:'bold',
    color: colors.lighter,
  },

  body: {
    fontSize: 14,
    margin:10,
    color: colors.primary
  },


  buttonText: {
    fontWeight:'bold',
    color: colors.darker
  }

})
