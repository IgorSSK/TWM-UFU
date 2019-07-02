import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center'
  },

  buttonP:{
    backgroundColor: colors.transparent,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderRadius:5,
    borderColor: colors.bt_sucess
  },

  buttonF:{
    backgroundColor: colors.transparent,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderRadius:5,
    borderColor: colors.bt_fail
  },

  textP:{
    fontSize: 22,
    color: colors.bt_sucess,
    fontWeight:'bold'
  },

  textF:{
    fontSize: 22,
    color: colors.bt_fail,
    fontWeight:'bold'
  }

})

export default styles
