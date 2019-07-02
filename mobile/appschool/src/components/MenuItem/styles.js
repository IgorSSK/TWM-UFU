import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  button:{
    flexDirection:'row',
    backgroundColor: colors.menu_item,
    alignItems:'center',
    elevation:0.5

  },

  text:{
    fontSize: 28,
    fontWeight:'500',
    color: colors.white
  },

  image: {
    width: 120,
    height: 100,
    marginRight:20
  }

})

export default styles
