import { colors, fonts } from '../../styles/index'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    alignItems: 'stretch',
    backgroundColor: colors.darker
  },

  logo: {
    width:'100%',
    height:187,
    opacity:0.6,
  },

  frase: {
      opacity: 0.6,
      padding:15,
      textAlign:'center',
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 6,
      color: colors.lighter,
      fontFamily: 'edwardianScriptItc',
      fontSize: 25,
      fontWeight: '400',
  },

  imgRight: {
    width: 24,
    height: 24,
    marginRight: 15,
    alignItems:'center',
    justifyContent:'center'
  },

  imgLeft: {
    width: 24,
    height: 24,
    marginLeft: 15,
    alignItems:'center',
    justifyContent:'center'
  },

  modalContainer: {
    alignItems:'center',
    justifyContent:'center'
  },
  modelBox:{
    justifyContent:'space-around',
    alignItems: 'stretch',
    height:'50%',

  }

})

export default styles
