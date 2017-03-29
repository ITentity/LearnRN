/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { string2Byte, byte2String } from './flow';


const CIRCLE_SIZE = 200;
const RADIUS = CIRCLE_SIZE * 0.5;


export default class App extends Component {

  string2Byte() {
    console.log(string2Byte('上网'));
  }

  byte2String() {
    console.log(byte2String([228, 184, 138, 231, 189, 145]));
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.string2Byte()}>
          <Text>zzzasdfadfasdfadsf</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.byte2String()}>
          <Text>zzzasdfadfasdfadsf</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'gray',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: RADIUS,
    //  backgroundColor: 'lightgray',
  },

});
