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

export default class Home extends Component {
    static get defaultProps() {
      return {
        title: 'Home',
        index: 0,
        id: 'Home'
          };
        }


    onButtonPress(){
      this.props.navigator.push({
        id: 'GenericContainer'
      })
    }
    onButtonPressPing(){
      this.props.navigator.push({
        id: 'PingPongContainer'
      })
    }
    onButtonPressRummy(){
      this.props.navigator.push({
        id: 'SpadesContainer'
      })
    }

    render(){
      return(
        <View  style={styles.container}>
                <Text style={styles.titles}>LOGO</Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                  <Text style={styles.titles}>BASIC</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onButtonPressPing.bind(this)}>
                  <Text style={styles.titles}>PING PONG</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onButtonPressRummy.bind(this)}>
                  <Text style={styles.titles}>SPADES</Text>
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
  titles: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 30
  }
});
