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

      _populatePlayers() {
      var playerBlocks = [];
      for(var i=1;i<=this.state.players;i++){
        playerBlocks.push(
            (<View>
                <GenericPlayer key={i}/>
            </View>)
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
<<<<<<< HEAD
              <Text>Number of Players: {this.state.players}</Text>
          </View>
            <GenericPlayer />

=======
              {this._populatePlayers()}
              <Text>Number of Players: {this.state.players}</Text>
                <Text>ScoreBoard</Text>
>>>>>>> 2c93117dc1fcfeb7b6cd370f2e8a1ac3351adbfb
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
