import React, { Component } from 'react'

import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native'

import styles from './style';
import api from '../../services/api'

export default class History extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<TextInput
        placeholder="search"
        placeholderTextColor= 'white'
        style={ styles.search }
        onChangeText={ (id) => navigation.state.params.idChanged(id) }
      />),
    headerRight:(
      <TouchableOpacity onPress={ () => navigation.state.params.search() }>
        <Image style={ styles.header_image } source={ require('../../images/ic_search.png') } resizeMode='contain' />
      </TouchableOpacity>
    )
  })

  state = {
    id:'',
    modalVisible: false,
    student:{},
    class: {}
  }

  componentWillMount(){
    this.props.navigation.setParams({ idChanged: this.idChangeHandler })
    this.props.navigation.setParams({ search: this.searchHandler })
  }

  idChangeHandler = id =>  {
    this.setState({ id })
  }

  searchHandler = async () => {
    const {data, status} = await api.get(`/api/students/${ this.state.id }`)
    if(status === 200) this.setState({ modalVisible:true, student: data.student, class: data._class })
  }

  render() {
    const std = this.state.student
    const cls = this.state.class

    return (
      <View style={ styles.container }>
        { this.state.modalVisible && (<View style={ styles.card }>
          <Image style={ styles.card_image } source={ require('../../images/img_graduate.png') } resizeMode='contain'/>
          <View style={ styles.card }>
            <Text style={ styles.card_title }>{ std.studentName }</Text>
            <Text style={ styles.card_text }>{ `Declaramos que o aluno ${ std.studentName } frequenta esta instituição.
            Onde o mesmo pertence atualmente a turma ${ cls.className } e possui ${ std.amountFaults } faltas no período.` }</Text>
            <View style={ styles.card_info }>
              <Text style={ styles.card_text }>Nome da Mãe: </Text>
              <Text style={ styles.card_text }>{ std.firstResponsibleName }</Text>
            </View>
            <View style={ styles.card_info }>
              <Text style={ styles.card_text }>Nome do Pai: </Text>
              <Text style={ styles.card_text }>{ std.secondResponsibleName }</Text>
            </View>
          </View>
        </View>)}
      </View>
    )
  }
}
