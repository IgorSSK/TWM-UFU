import React, { Component } from 'react'

import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native'

import SearchBar from '../../components/SearchBar/index'

import styles from './style';

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
    student:[]
  }

  componentWillMount(){
    this.props.navigation.setParams({ idChanged: this.idChangeHandler })
    this.props.navigation.setParams({ search: this.searchHandler })
  }

  idChangeHandler = id =>  {
    this.setState({ id })
  }

  searchHandler = () => {
    this.setState({ modalVisible:true })
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.state.modalVisible && (<View style={ styles.card }>
          <Image style={ styles.card_image } source={ require('../../images/img_graduate.png') } resizeMode='contain'/>
          <View style={ styles.card }>
            <Text style={ styles.card_title }>Eis o Historico do Aluno</Text>
            <Text style={ styles.card_text }>Declaramos que o aluno X frequenta esta instituição. Onde o mesmo pertence atualmente a turma Y e possui Z faltas no período.</Text>
            <View style={ styles.card_info }>
              <Text style={ styles.card_text }>Nome da Mãe: </Text>
              <Text style={ styles.card_text }>X</Text>
            </View>
            <View style={ styles.card_info }>
              <Text style={ styles.card_text }>Nome do Pai: </Text>
              <Text style={ styles.card_text }>Y</Text>
            </View>
          </View>
        </View>)}
      </View>
    )
  }
}
