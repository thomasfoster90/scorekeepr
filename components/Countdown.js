/**
 * Created by guguyanhua on 12/11/15.
 */
import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
var TimerMixin = require('react-timer-mixin');

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.time ? this.props.time : 60,
      disabled: false
    };
  },
  // componentDidMount(){
  //   this._countdown();
  // },
  render(){
    var style = [styles.text];
    var component;
    if (this.state.disabled) {
      style.push({color: 'gray'});
      style.push(this.props.disabledTextStyle);
      component =
          <View style={styles.container}>
                <TouchableHighlight
                    style={[styles.wrapper,this.props.buttonStyle]}
                    onPress={this._resetTimer}
                    >
                      <Text style={styles.Timer}>Reset</Text>
                </TouchableHighlight>
            <TouchableHighlight
                >
              <Text style={[style, styles.clock]}>{this.props.text}({this.state.time})</Text>
            </TouchableHighlight>
          </View>
    } else {
      component =
        <View style={styles.container}>
          <TouchableHighlight
              style={[styles.wrapper,this.props.buttonStyle]}
              onPress={this._onPress}
              >
                <Text style={styles.Timer}>Start</Text>
          </TouchableHighlight>
          <Text style={[style,this.props.textStyle, styles.clock]}>{this.props.text}({this.state.time})</Text>
        </View>
    }
    return (
        component
    )
  },
  _onPress(){
    if (this.state.disabled) {
      //nothing
    } else {
      this.setState({disabled: true});
      this._countdown();
      if(this.props.onPress){
          this.props.onPress();
      }
    }
  },

  _resetTimer(){
    this.setState({
      disabled: false,
      time: 0
    })

  },

  _countdown(){
    var timer = function () {
      var time = this.state.time - 1;
      this.setState({time: time});
      if (time > 0) {
        this.setTimeout(timer, 1000);
      } else if (this.state.time === 0) {
        alert('TIMES UP')
      } else {
        this.setState({disabled: false});
        this.setState({time: this.props.time ? this.props.time : 60});
      }
    };
    this.setTimeout(timer, 1000);
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    color: 'black'
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    backgroundColor: '#e5e5e5',
  },
  clock: {
    color: 'white',
    backgroundColor: '#009688',
    fontFamily: 'Quicksand-Bold',
    fontSize:20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    padding: 10,
    alignItems: 'center'
  },
  Timer: {
    fontFamily: 'Quicksand',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#009688',
    borderRadius: 3

  }
});

module.exports = CountDown;
