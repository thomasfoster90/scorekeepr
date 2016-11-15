import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  ScrollView
} from 'react-native';

import CountDown from './Countdown'

import PingPongPlayer from './PingPongPlayer'


export default class PingPongContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      players:1
    }
  }
    static get defaultProps() {
      return {
        title: 'PingPongContainer',
        index: 1,
        id: 'PingPongContainer'
          };
        }


      onButtonPress(){
        this.props.navigator.pop({
          id: 'Game'
        })
      }

      _populatePlayers() {
      var playerBlocks = [];
      for(var i=1;i<=this.state.players;i++){
        playerBlocks.push(
          <PingPongPlayer key={i} playernumber={i}/>
        );

      }
        return playerBlocks;

    }


    render(){
      return(
        <View  style={styles.container}>
            <Slider
                maximumValue={8}
                step={1}
                value={this.state.players}
                onValueChange={players => this.setState({players})}
              />
              <ScrollView>
              {this._populatePlayers()}
              </ScrollView>
              <Text>Number of Players: {this.state.players}</Text>
                <Text>Ping Pong</Text>
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
