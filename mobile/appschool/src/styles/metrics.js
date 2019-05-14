import { Plataform } from 'react-native'

export default {

  padding: 15,
  ...Plataform.select( {
    ios: { headerHeight: 65, headerPadding: 20 },
    android: { headerHeight: 45, headerPadding: 0 }
   } )

}
