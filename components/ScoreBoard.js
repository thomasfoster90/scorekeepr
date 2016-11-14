import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator
} from 'react-native';

import GenericPlayer from './GenericPlayer'

export default class ScoreBoard extends Component {
  constructor(props){
    super(props)

    this.state={
      players:1
    }
  }
    static get defaultProps() {
      return {
        title: 'ScoreBoard',
        index: 1,
        id: 'ScoreBoard'
          };
        }


      onButtonPress(){
        this.props.navigator.pop({
          id: 'Game'
        })
      }



    render(){
      return(
        <View  style={styles.container}>
          <View>
            <Slider
                maximumValue={8}
                step={1}
                value={this.state.players}
                onValueChange={players => this.setState({players})}
              />
              <Text>Numbr of Player{this.state.players}</Text>
          </View>
            <GenericPlayer />
                <Text>ScoreBoard</Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                  <Text>Tap me to load the previous scene</Text>
                </TouchableHighlight>
        </View>


      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
