import { colors, fonts } from '../../styles/index'
import { StyleSheet } from 'react-native'
import { black } from 'ansi-colors';

export default styles = StyleSheet.create({
  container: {
    alignItems:'stretch',
    marginTop:5,
    marginBottom:5,
    borderBottomWidth:2,
    borderColor:'rgba(0,0,0,0.3)'
  },

  title: {
    alignSelf: 'center',
    margin:10,
    fontSize:18,
    fontWeight:'bold'
  },

  body: {
    margin:10
  },

  button: {
    margin: 18,
    alignSelf:'flex-end'
  },

  buttonText: {
    fontWeight:'bold',
  }

})
