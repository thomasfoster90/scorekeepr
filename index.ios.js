/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard'

export default class scorekeepr extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Game',
                        index: 0 ,
                        id: 'Game'
                      }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    )
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Game':
        return(<Game navigator={navigator} title='First' />)
      case 'ScoreBoard':
        return(<ScoreBoard navigator={navigator} title='ScoreBoard' />)
    }
  }
}


AppRegistry.registerComponent('scorekeepr', () => scorekeepr);
