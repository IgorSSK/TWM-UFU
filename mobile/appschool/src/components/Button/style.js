import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  button:{
    flexDirection:'row',
    backgroundColor: colors.button,
    padding:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    elevation: 1
  },

  text:{
    fontSize: 22,
    color: colors.primary_light,
    opacity: 0.5
  },

  image: {
    width: 28,
    height: 28,
    opacity:0.5,
    paddingRight:60
  }

})

export default styles
