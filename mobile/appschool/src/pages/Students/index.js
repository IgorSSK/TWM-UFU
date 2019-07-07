import React, { Component } from 'react';

import { View, FlatList, Text } from 'react-native';

import ListItem from '../../components/ListItem/index'

import styles from './style'

import api from '../../services/api'

export default class Students extends Component {

  state = {
    students:[]
  }

  async componentWillMount() {
    const response = await api.get('/api/students')

    this.setState({ students:response.data })
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.list_container }
          data={ this.state.students }
          keyExtractor={(item, index) => item.id.toString() }
          renderItem={ ({ item }) => <View style={ styles.list_container }>
                                         <ListItem id={ item.id }
                                              name={ item.studentName }
                                              faults={ item.amountFaults }
                                              status={ item.status }
                                              onTap={ null }
                                        />
                                        <View style={ styles.list_item }>
                                          <View style={ styles.subcontainer }>
                                            <Text style={ styles.list_text }>Telefone:</Text>
                                            <Text style={ styles.list_text }>{ item.studentPhone }</Text>
                                          </View>
                                          <View style={ styles.subcontainer }>
                                            <Text style={ styles.list_text }>ID Turma:</Text>
                                            <Text style={ styles.list_text }>{ item.class_id }</Text>
                                          </View>
                                        </View>
                                      </View>

                     }
        />
      </View>
    )
  }
}
