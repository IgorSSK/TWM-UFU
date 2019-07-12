import React, { Component } from 'react'

import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './styles'
import api from '../../services/api'

export default class News extends Component {

  state = {
    title:'',
    body:'',
    author:'',
    createdAt:'',
    numberOfLines:4,
    show:false,
    news:[]
  }

  async componentDidMount(){
    const { data, status } = await api.get('/api/news')
    if(status === 200) this.setState({ news:data })
  }

  render() {
    return(
      <FlatList
      data={ this.state.news }
      keyExtractor={ (item, index) =>  item.id.toString()}
      renderItem={ ({ item }) => (
        <View>
          <View style={ styles.header_container }>
            <Text style={ styles.title }>{ item.title }</Text>
          </View>
          <View style={ styles.body_container }>
            <Text style={ styles.body }>{ item.body }</Text>
          </View>
          <View>
            <TouchableOpacity style={ styles.button_container } onPress={ () => this.setState({ numberOfLines: !this.state.show ? 8 : 4, show:!this.state.show }) }>
              <Text style={ styles.buttonText }>{ !this.state.show ? 'Read more' : 'Minimize' }</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      />
    )
  }
}
