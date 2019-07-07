import React, { Component } from 'react'

import { View, FlatList } from 'react-native'

import Button from '../../components/Button/index'
import ListItem from '../../components/ListItem/index'

import api from '../../services/api'

import styles from './styles'

export default class Attendance extends Component {

  static navigationOptions = ({ navigation }) =>({
    headerTitle: navigation.getParam('classe')
  })

  state = {
    students:[],
    classe:''
  }

  statusHandler = (id) => {
    let students = this.state.
                        students.map(
                          (element) => element.id === id ? {...element,
                                                            status: !element.status,
                                                            amountFaults: element.status ? element.amountFaults + 1 : element.amountFaults - 1 } : element
                        )

    this.setState({ students })
  }

  async componentWillMount() {
    const response = await api.get('/api/students')

    this.setState({ students:response.data })
  }

  componentDidMount() {
    this.props.navigation.setParams({ classe: this.state.classe });
  }


  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.list_container }
          data={ this.state.students }
          keyExtractor={(item, index) => item.id.toString() }
          renderItem={ ({ item }) => <ListItem id={ item.id }
                                               name={ item.studentName }
                                               faults={ item.amountFaults }
                                               status={ item.status }
                                               onTap={ () => this.statusHandler(item.id) }
                                      />
                     }
        />
        <View>
          <Button srcImage={ require('../../images/check.png') } btnText='Finalizar Chamada' style={ styles.button }/>
        </View>
      </View>
    )
  }
}
