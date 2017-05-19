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

export default class App extends Component {
  // 注意这个方法前面有async关键字
  async netWork() {
    alert(111);
    try {
       // 注意这里的await语句，其所在的函数必须有async关键字声明
      const response = await fetch('https://facebook.github.io/react-native/movies.json');
      const responseJson = await response.json();
      console.log(`获取百度的内容1${responseJson}`);
      console.log(`获取百度的内容2${JSON.stringify(responseJson)}`);
      return responseJson.movies;
    } catch (error) {
      console.log(`获取百度的内容3${error}`);
      console.error(error);
      return error;
    }
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.netWork()}>
          <View style={{ marginTop: 30 }}>
            <Text>111</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
 }
