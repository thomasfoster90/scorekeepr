import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  ScrollView,
  TextInput
} from 'react-native';


import PingPongPlayer from './PingPongPlayer'


export default class PingPongContainer extends Component {
  constructor(props){
    super(props)



    this.state={
      players:2,
      winner: 0
    }
  }
    static get defaultProps() {
      return {
        title: 'PingPongContainer',
        index: 1,
        id: 'PingPongContainer'
          };
        }

        _handleNameChange(winner) {
        this.setState({winner})
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
          <PingPongPlayer  onButtonReset={this.onButtonReset} winScore={this.state.winner} key={i} playernumber={i}/>
        );

      }
        return playerBlocks;

    }


    render(){
      return(
        <View style={styles.container}>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Text>HOME</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>RESET</Text>
          </TouchableHighlight>
              <ScrollView>
              {this._populatePlayers()}
              </ScrollView>
              <Text>Number of Players: {this.state.players}</Text>
                <Text>Ping Pong</Text>
          <TextInput style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1, fontSize: 12}} onChangeText={this._handleNameChange.bind(this)} placeholder={'Winning score'} />
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
