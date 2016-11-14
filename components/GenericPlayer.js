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


export default class GenericPlayer extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 0,
      text: ''
    }
  }

  _addOne(){
    console.log('add');
    let newTotal = this.state.total + 1
    console.log(newTotal);
    this.setState({
      total: newTotal
    })
  }

  _subtractOne(){
    console.log('subtract');
    let newTotal = this.state.total - 1
    console.log(newTotal);
    this.setState({
      total: newTotal
    })
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
        </View>
    );
  }
}
