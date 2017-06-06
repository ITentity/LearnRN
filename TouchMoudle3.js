/**
 * Created by zhaozx on 2017/6/5.
 */

import React, { Component } from 'react';
import { View, PanResponder } from 'react-native'

export default class TouchMoudle3 extends Component {

  componentWillMount() {
    var release = (e, gestureState) => {
      alert('点击333');
    }

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (e, gestureState) => {

      },
      // 触摸事件结束
      onPanResponderRelease: release,
      onPanResponderTerminate: release,
      // Dragging, move the view with the touch
      onPanResponderMove: (e, gestureState) => {

      },
    });
  }

  render() {
    return (
      <View
        style={this.props.style}
        {...this._panResponder.panHandlers}>
        {this.props.children}
      </View>
    );
  }
}

