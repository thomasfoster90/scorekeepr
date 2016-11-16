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
  TextInput,
  Modal
} from 'react-native';


import PingPongPlayer from './PingPongPlayer'


export default class PingPongContainer extends Component {
  constructor(props){
    super(props)



    this.state={
      players:2,
      winner: 0,
      modalVisible: false

    }
  }
    static get defaultProps() {
      return {
        title: 'PingPongContainer',
        index: 1,
        id: 'PingPongContainer'
          };
        }

        setModalVisible(visible) {
          this.setState({modalVisible: visible});
        }

      onReset(){
        console.log('reset');

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
          <PingPongPlayer onReset={this.onReset} winScore={this.state.winner} key={i} playernumber={i}/>
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
              <ScrollView>
              {this._populatePlayers()}
              </ScrollView>
              <Text>Number of Players: {this.state.players}</Text>
                <Text>Ping Pong</Text>
          <TextInput style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1, fontSize: 12}} onChangeText={this._handleNameChange.bind(this)} placeholder={'Winning score'} />
          <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
          <ScrollView>

          <Text> A game is started when one player (server) makes a service before the receiver makes the return.</Text>

          <Text> The Server should:</Text>
          <Text> - start with the ball resting freely on an open palm.</Text>
          <Text> - project the ball near vertically upwards, without imparting spin, so that it rises at least 16cm.</Text>
          <Text> - strike the ball so that it touches first his/her court and then, after passing over the net assembly, touches directly the receiver's court. In doubles, the ball must touch successively the right half court of server and receiver.
          Once the ball has been served, both players are to make returns until a point is scored. In doubles, each player on the same team must take turns to make the return.</Text>

          <Text> After 2 points have been scored, the receiving player/pair shall become the serving player/pair and so on until the end of the game.</Text>

          <Text> Scoring</Text>

          <Text> A set is when one of the players or pairs first score 11 points. In the event that both players/pairs score 10 points, a set is be won by the first player/pair to gain a 2-point lead. A full match is won when a player or pair wins the best of any odd number of sets (3,5,7).</Text>

          <Text> A point is scored when:</Text>
          <Text> 1. an opponent fails to make a correct service,
          2. an opponent fails to make a return,
          3. the ball touches any part of an opponent's body,
          4. an opponent strikes the ball twice in succession,
          5. if an opponent, or anything an opponent wears, touches the playing surface or net during play,
          6. if a doubles opponent strikes the ball out of the sequence established by the first server and first receiver.</Text>
          </ScrollView>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>BACK TO GAME</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>RULES</Text>
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
