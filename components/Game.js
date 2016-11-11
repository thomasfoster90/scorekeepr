import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight
} from 'react-native';

export default class Game extends Component {
    static get defaultProps() {
      return {
        title: 'Game'
          };
        }

    render(){
      return(
        <View  style={styles.container}>
                <Text>Game</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                  <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                  <Text>Tap me to go back</Text>
                </TouchableHighlight>
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
