import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  PickerIOS
  } from 'react-native';

  const PickerItemIOS = PickerIOS.Item;

class SpadesPlayer extends Component {
  constructor(props){
    super(props);

    this.state={
      total: "0",
      teamName: '',
      p1Bid: "1",
      p2Bid: "1",
      p1Tricks: "1",
      p2Tricks: "1",
      sandbags:'0'
    }
  }

  _handleNameChange(teamName) {
    this.setState({teamName})
  }

  _calculateTotal() {
    console.log('_calculateTotal');
    if ((this.state.p1Bid === "blindnil") || (this.state.p2Bid === "blindnil") ) {
      this._blindNilScore()
    } else if ((this.state.p1Bid === "nil") || (this.state.p2Bid === "nil")) {
      this._nilScore()
    } else {
      this._normalScore()
    }
    // this._sandbagCheck()
  }


  _normalScore() {
    console.log('_normalScore');
    let p1B = +this.state.p1Bid;
    let p1T = +this.state.p1Tricks;
    let p2B = +this.state.p2Bid;
    let p2T = +this.state.p2Tricks;
    let total = +this.state.total;
    let sandbags = +this.state.sandbags;

    if ((p1B + p2B) <= (p1T + p2T)) {
      var amtToAdd = (p1B+p2B)*10
      sandbags+= ((p1T + p2T) - (p1B+p2B))

    } else if ((p1B + p2B) > (p1T + p2T)) {
      var amtToAdd = (p1B+p2B) *(-10)
    }
    total+=amtToAdd;
    this.setState({ total, sandbags })
  }

  _blindNilScore() {
    let p1B = this.state.p1Bid;
    let p1T = this.state.p1Tricks;
    let p2B = this.state.p2Bid;
    let p2T = this.state.p2Tricks;
    let total = +this.state.total;
    let sandbags = +this.state.sandbags;

    //if p1 bid blindnil
      if (p1B === 'blindnil') {
        //get p2's score
        if (p2T >= p2B)  {
          var amtToAdd = (+p2B)*10;
          sandbags += (+p2T)-(+p2B)

        } else {
           var amtToAdd = (+p2B)*(-10);
         }
         // if p1 got blindnil
        if (p1T === 'blindnil') {
          amtToAdd += 200
        } else {
          //if p1 didn't get blindnil
          amtToAdd -= 200
          sandbags += (+p1T)
        }
      // total += amtToAdd
      // this.setState({ total, sandbags })
    }
      // else p2 bid blind nil, so get p1's score
        else if (p2B === 'blindnil') {
          if (p1T >= p1B)  {
          var amtToAdd = p1B*10;
          sandbags += (p1T-p1B)

        } else {
           var amtToAdd = p1B*(-10);
         }
         // if p2 got blindnil
        if (p2T === 'blindnil') {
          amtToAdd += 200
        } else {
          //if p1 didn't get blindnil
          amtToAdd -= 200
          sandbags += (+p1T)
      }

    }
    total+=amtToAdd
    this.setState({ total, sandbags })
  }

  _nilScore() {
    let p1B = this.state.p1Bid;
    let p1T = this.state.p1Tricks;
    let p2B = this.state.p2Bid;
    let p2T = this.state.p2Tricks;
    let total = +this.state.total;
    let sandbags = +this.state.sandbags;

    //if p1 bid nil
      if (p1B === 'nil') {
        //get p2's score
        if (p2T >= p2B)  {
          var amtToAdd = p2B*10;
          sandbags += (+p2T)-(+p2B)

        } else {
           var amtToAdd = p2B*(-10);
         }
         // if p1 got nil
        if (p1T === 'nil') {
          amtToAdd += 100
        } else {
          //if p1 didn't get nil
          amtToAdd -= 100
          sandbags += +p1T
        }
      }
      // else p2 bid nil, so get p1's score
        else if (p2B === 'nil') {
          if (p1T >= p1B)  {
          var amtToAdd = p1B*10;
          sandbags += (+p1T) - (+p1B)

        } else {
           var amtToAdd = p1B*(-10);
         }
         // if p2 got nil
        if (p2T === 'nil') {
          amtToAdd += 100
        } else {
          //if p1 didn't get nil
          amtToAdd -= 100
          sandbags += (+p1T)
      }
    }
    this.setState({ total, sandbags })
    this._sandbagCheck()
  }

  _sandbagCheck() {
    console.log('_sandbagCheck');

    if (+this.state.sandbags >= 10) {
      let total = +this.state.total - 100
      let sandbags = +this.state.sandbags - 10
      this.setState({ total, sandbags })
  }
}
  render() {
    return (
        <View style={styles.playerContainer}>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={this._handleNameChange.bind(this)} placeholder="Team Name" />
          <View>
            <Text>Bids Tricks</Text>
          </View>
          <View>
            <Text>P1 P2 P1 P2</Text>
          </View>
          <View style={styles.pickerContainer}>
            <PickerIOS
              selectedValue={this.state.p1Bid}
              onValueChange={(p1Bid) => this.setState({p1Bid})} style={styles.picker} itemStyle={styles.pickerItems}>
              <PickerItemIOS label="BN" value="blindnil" />
              <PickerItemIOS label="N" value="nil" />
              <PickerItemIOS label="1" value="1" />
              <PickerItemIOS label="2" value="2" />
              <PickerItemIOS label="3" value="3" />
              <PickerItemIOS label="4" value="4" />
              <PickerItemIOS label="5" value="5" />
              <PickerItemIOS label="6" value="6" />
              <PickerItemIOS label="7" value="7" />
              <PickerItemIOS label="8" value="8" />
              <PickerItemIOS label="9" value="9" />
              <PickerItemIOS label="10" value="10" />
              <PickerItemIOS label="11" value="11" />
              <PickerItemIOS label="12" value="12" />
              <PickerItemIOS label="13" value="13" />
            </PickerIOS>
            <PickerIOS
              selectedValue={this.state.p2Bid}
              onValueChange={(p2Bid) => this.setState({p2Bid})}
              style={styles.picker} itemStyle={styles.pickerItems}>
              <PickerItemIOS label="BN" value="blindnil" />
              <PickerItemIOS label="N" value="nil" />
              <PickerItemIOS label="1" value="1" />
              <PickerItemIOS label="2" value="2" />
              <PickerItemIOS label="3" value="3" />
              <PickerItemIOS label="4" value="4" />
              <PickerItemIOS label="5" value="5" />
              <PickerItemIOS label="6" value="6" />
              <PickerItemIOS label="7" value="7" />
              <PickerItemIOS label="8" value="8" />
              <PickerItemIOS label="9" value="9" />
              <PickerItemIOS label="10" value="10" />
              <PickerItemIOS label="11" value="11" />
              <PickerItemIOS label="12" value="12" />
              <PickerItemIOS label="13" value="13" />
            </PickerIOS>
            <PickerIOS
              selectedValue={this.state.p1Tricks}
              onValueChange={(p1Tricks) => this.setState({p1Tricks})}
              style={styles.picker} itemStyle={styles.pickerItems}>
              <PickerItemIOS label="BN" value="blindnil" />
              <PickerItemIOS label="N" value="nil" />
              <PickerItemIOS label="1" value="1" />
              <PickerItemIOS label="2" value="2" />
              <PickerItemIOS label="3" value="3" />
              <PickerItemIOS label="4" value="4" />
              <PickerItemIOS label="5" value="5" />
              <PickerItemIOS label="6" value="6" />
              <PickerItemIOS label="7" value="7" />
              <PickerItemIOS label="8" value="8" />
              <PickerItemIOS label="9" value="9" />
              <PickerItemIOS label="10" value="10" />
              <PickerItemIOS label="11" value="11" />
              <PickerItemIOS label="12" value="12" />
              <PickerItemIOS label="13" value="13" />
            </PickerIOS>
            <PickerIOS
              selectedValue={this.state.p2Tricks}
              onValueChange={(p2Tricks) => this.setState({p2Tricks})}
              style={styles.picker} itemStyle={styles.pickerItems}>
              <PickerItemIOS label="BN" value="blindnil" />
              <PickerItemIOS label="N" value="nil" />
              <PickerItemIOS label="1" value="1" />
              <PickerItemIOS label="2" value="2" />
              <PickerItemIOS label="3" value="3" />
              <PickerItemIOS label="4" value="4" />
              <PickerItemIOS label="5" value="5" />
              <PickerItemIOS label="6" value="6" />
              <PickerItemIOS label="7" value="7" />
              <PickerItemIOS label="8" value="8" />
              <PickerItemIOS label="9" value="9" />
              <PickerItemIOS label="10" value="10" />
              <PickerItemIOS label="11" value="11" />
              <PickerItemIOS label="12" value="12" />
              <PickerItemIOS label="13" value="13" />
            </PickerIOS>
            <TouchableHighlight style={{backgroundColor: 'lightblue', justifyContent:"center"}} onPress={this._calculateTotal.bind(this)}>
              <Text>
                Calculate Score
              </Text>
            </TouchableHighlight>
            <View style={styles.total}>
              <Text>Total:</Text>
              <Text>{this.state.total}</Text>
              <Text onValueChange={this._sandbagCheck()}>Sandbags: {this.state.sandbags}</Text>
            </View>
          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex:1,
    flexDirection: 'row'
  },
  picker: {
    flex:1,
    width: 10,
  },
  total: {
    flex:1,
    justifyContent: 'center'
  },
  pickerItems: {
    fontSize: 15
  }
})

export default SpadesPlayer;
