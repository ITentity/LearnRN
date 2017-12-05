/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  requireNativeComponent
} from 'react-native';
import LinearGardientButton from './ImageView';

export default class App extends Component {
  render() {
    return (
      <View>
        <LinearGardientButton style={{width:100,height:200}} startColor={'yellow'} endColor={'red'}  orentation={1}/>
      </View>
    );
  }
 }
