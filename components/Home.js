import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  Image
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
    onButtonPressSpades(){
      this.props.navigator.push({
        id: 'SpadesContainer'
      })
    }

    render(){
      return(
        <View  style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('./public/scorekeeperlight.png')} style={styles.logo}>
              {/* <View style={styles.firstContainer}>
              </View>
              <View style={styles.secondContainer}>
              </View> */}
            </Image>
          </View>

          <View style={styles.thirdContainer}>
            <TouchableHighlight onPress={this.onButtonPressSpades.bind(this)}>
              <Text style={styles.titles}>SPADES</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.fourthContainer}>
            <TouchableHighlight onPress={this.onButtonPressPing.bind(this)}>
              <Text style={styles.titles}>PING PONG</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.fifthContainer}>
            <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.titles}>BASIC</Text>
            </TouchableHighlight>
          </View>
        </View>

      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop:20,
    justifyContent: 'center',
  },
  firstContainer: {
    flex:1,
    backgroundColor: "#83D0C9",
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondContainer: {
    flex:1,
    backgroundColor: "#65C3BA",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#65C3BA"
  },
  logo: {
    height: 250,
    width: 250,
  },
  thirdContainer: {
    flex:1,
    backgroundColor: "#54B2A9",
    justifyContent: 'center',
    alignItems: 'center'
  },
  fourthContainer: {
    flex:1,
    backgroundColor: "#35A79C",
    justifyContent: 'center',
    alignItems: 'center'
  },
  fifthContainer: {
    flex:1,
    backgroundColor: "#009688",
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {
    fontFamily: 'Quicksand',
    fontSize: 20,
    color: 'white',

  }
});
