/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { add } from './flow';

export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => alert(add(1, 2))}>
          <Text>111</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
 }
