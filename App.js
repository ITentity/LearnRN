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
  ListView,
  RefreshControl,
  ActivityIndicator,
  Spinner,
} from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class App extends Component {

  // 构造
  constructor(props) {
    super(props);
      // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([1,2,3,4,56,7,89,0,12,23,34,45,56]),
      refreshing: false,
    };
  }

  componentWillUnmount() {
    this.timeOut && clearTimeout(this.timeOut);
  }

  closeRefresh() {
    this.setState({ refreshing: true });
    // this.timeOut = setTimeout(()=>{
    //   alert('停止刷新');
    //   this.setState({
    //     refreshing: false,
    //   });
    // }, 1000)
  }

  render() {
    return (
      <View>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => { () => this.closeRefresh(); }}
              colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
              progressBackgroundColor="#ffffff"
            />}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <View>
                <Text>{rowData}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
 }
