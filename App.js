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
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      showTime: 0,
      isRun: false,
    };
  }

  renderButton() {
    if(this.state.isRun){
      return(
        <TouchableWithoutFeedback onPress={() => this.endTime()}>
          <Text>停止</Text>
        </TouchableWithoutFeedback>
      );
    }
    return(
      <TouchableWithoutFeedback onPress={() => this.startTime()}>
        <Text>开始</Text>
      </TouchableWithoutFeedback>
    );
  }

  startTime() {
    let i = 0
    this.timer = setInterval(()=>{
      i += 1;
      this.setState({
        showTime: i,
        isRun: true,
      })
    },1000)
  }

  endTime() {
    this.timer&&clearTimeout(this.timer);
    this.setState({
      isRun: false,
      showTime: 0,
    })
  }

  render() {
    return (
      <View>
        <Text>{this.state.showTime}</Text>
        {this.renderButton()}
      </View>
    );
  }
 }
