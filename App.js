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
import { StackNavigator } from 'react-navigation';
import { add } from './flow';

export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => alert(add(a, b))}>
          <Text>111</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
 }
