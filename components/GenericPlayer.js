import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  TextInput
} from 'react-native';

import GenericContainer from './GenericContainer'

export default class GenericPlayer extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 0,
      text: ''
    }
  }

  _resetButton(){
    this.setState({
      total: 0,
      text: ''
    })
  }

  _addOne(){
    console.log('add');
    let newTotal = this.state.total + 1
    let winner = this.props.winScore
    console.log(newTotal);
    console.log(winner);
    this.setState({
      total: newTotal
    })
    if(newTotal === +winner){
      alert('Winner')
    }
  }

  _subtractOne(){
    console.log('subtract');
    let newTotal = this.state.total - 1
    console.log(newTotal);
    if (this.state.total === 0) {
      alert('No Points to Subtract')
    } else {
      this.setState({
        total: newTotal
      })
    }

  }

  _handleNameChange(text) {
    this.setState({text})
  }


  render() {
    let playNum = "Player "+this.props.playernumber.toString();
    return (
        <View>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={this._handleNameChange.bind(this)} placeholder={playNum} />
          <TouchableHighlight onPress={this._addOne.bind(this)}><Text>Add 1</Text></TouchableHighlight>
          <TouchableHighlight onPress={this._subtractOne.bind(this)}><Text>Subtract 1</Text></TouchableHighlight>
          <Text>Total:</Text>
          <Text>{this.state.total}</Text>
          <TouchableHighlight onPress={this._resetButton.bind(this)}>
            <Text>RESET</Text>
          </TouchableHighlight>
        </View>
    );
  }
}
