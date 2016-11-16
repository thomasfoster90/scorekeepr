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

import SpadesPlayer from './SpadesPlayer'


export default class SpadesContainer extends Component {
  constructor(props){
    super(props)

  }
    static get defaultProps() {
      return {
        title: 'SpadesContainer',
        index: 1,
        id: 'SpadesContainer'
          };
        }


      onButtonPress(){
        this.props.navigator.pop({
          id: 'Game'
        })
      }

      _populatePlayers() {
      var playerBlocks = [];
      for(var i=1;i<=2;i++){
        playerBlocks.push(
          <SpadesPlayer key={i} playernumber={i}/>
        );

      }
        return playerBlocks;

    }


    render(){
      return(
        <View  style={styles.container}>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Text>HOME</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>RESET</Text>
          </TouchableHighlight>
              <ScrollView>
              {this._populatePlayers()}
              </ScrollView>
                <Text>Spades</Text>

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
