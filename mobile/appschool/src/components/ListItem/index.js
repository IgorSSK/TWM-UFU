import React from 'react'
import { View, Text } from 'react-native'

import TapButton from '../../components/TapButton/index'

import styles from './style'

const ListItem = ({ name, id, faults, status, onTap }) => (
  <View style={ styles.list_item } >
    <View style={{ flex:1 }}>
      <Text style={ styles.list_text }>{ name }</Text>
      <View style={ styles.subcontainer }>
        <Text style={ styles.list_subtext }>{ 'id: ' + id }</Text>
        <Text style={ styles.list_subtext }>{ 'faltas: ' + faults }</Text>
      </View>
    </View>
    { onTap !== null ? <TapButton keyId={ id } onTap={ onTap } state={ status }/> : null }
  </View>
)

export default ListItem
