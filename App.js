/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { startWith, endWith } from './flow';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>
          111
          {console.log(startWith('W06XADFA', 'W06X'))}
          {console.log(startWith('W06X_ADFA', 'W06X'))}
          {console.log(startWith('W06ADFA', 'W06X'))}
          {console.log(endWith('adfasdW06X', 'W06X'))}
          {console.log(endWith('adfasdW06', 'W06X'))}
        </Text>
      </View>
    );
  }
 }
