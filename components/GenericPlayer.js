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
      text: 'Player 1'
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


  render() {
    return (
        <View>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          <TouchableHighlight onPress={this._addOne.bind(this)}><Text>Add 1</Text></TouchableHighlight>
          <TouchableHighlight onPress={this._subtractOne.bind(this)}><Text>Subtract 1</Text></TouchableHighlight>
          <Text>Total:</Text>
          <Text>{this.state.total}</Text>
        </View>
    );
  }
}
