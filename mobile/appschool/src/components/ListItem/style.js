import { StyleSheet } from 'react-native'

import { colors, fonts } from '../../styles/index'

export default styles = StyleSheet.create({

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

})
