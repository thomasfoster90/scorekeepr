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

import CountDown from './Countdown'

export default class ScoreBoard extends Component {
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

                <Text>ScoreBoard</Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                  <Text>Tap me to load the previous scene</Text>
                </TouchableHighlight>
                <CountDown />
        </View>

      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
