import React, { Component } from 'react';

import { View, ImageBackground } from 'react-native';

import styles from './styles';
import MenuItem from '../../components/MenuItem';


export default class MainMenu extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Olá Sr(a) ${ navigation.getParam('userName', '') }`,
    headerLeft: null
  })

  render() {
    return(
      <ImageBackground source={ require('../../images/background-icon.png') } style={ styles.container } resizeMode='contain'>
        <MenuItem btnText='Turmas' srcImage={ require('../../images/ic_classes.png') }/>
        <MenuItem btnText='Educadores' srcImage={ require('../../images/ic_teachers.png') }/>
        <MenuItem btnText='Estudantes' srcImage={ require('../../images/ic_students.png') } onClick={ () => this.props.navigation.navigate('Students') }/>
        <MenuItem btnText='Chamadas' srcImage={ require('../../images/ic_attendance.png') } onClick={ () => this.props.navigation.navigate('Attendance') }/>
        <MenuItem btnText='Historico' srcImage={ require('../../images/ic_history.png') } onClick={ () => this.props.navigation.navigate('History') }/>
      </ImageBackground>
    )
  }
}
