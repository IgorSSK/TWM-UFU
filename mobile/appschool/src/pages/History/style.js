import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/index'

export default styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.background
  },

  header_image: {
    width: 26,
    height: 26,
    margin: 15,
  },

  search: {
    width: '100%',
    height:'80%',
    borderColor: colors.white,
    fontSize: 16,
    alignSelf:'center',
    justifyContent:'center',
    color: colors.white,
    borderBottomWidth: 1,
    margin:0
  },

  card: {
    flex:1,
    margin:30,
    backgroundColor:'white'
  },

  card_image: {
    alignSelf:'center',
    margin: 25
  },

  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15
  },

  card_text: {
    fontSize: 16,
    fontStyle:'italic'
  },

  card_info: {
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 0.5
  }
})
