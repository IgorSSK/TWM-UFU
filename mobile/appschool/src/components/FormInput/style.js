import { colors, fonts } from '../../styles/index'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  formFocusIn: {
    borderBottomWidth:3,
    borderColor: colors.white,
    color: colors.white,
    fontSize:18,
    margin:10
  },

  formFocusOut: {
    borderBottomWidth:1,
    borderColor: colors.white,
    color: colors.white,
    fontSize:18,
    margin:10,
    marginHorizontal:35
  }
})

export default styles
