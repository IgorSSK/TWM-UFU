import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  button:{
    backgroundColor: colors.button,
    padding:25,
    alignItems:'center',
    borderRadius:25,
    elevation: 1
  },

  text:{
    fontSize: 18,
    color: colors.primary_light,
    opacity: 0.5
  }
})

export default styles
