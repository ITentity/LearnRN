import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';    // TabNavigator TAB导航（对场景进行TAB管理）
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
import ChatScreen from './ChatScreen';

const MainScreenNavigator = TabNavigator({
  zhaozx: { screen: RecentChatsScreen },
  bingo: { screen: AllContactsScreen },
});

// Because MainScreenNavigator is being used as a screen, we can give it navigationOptions
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },      // 第一个就是显示出来的tab页面
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('LearnRN', () => SimpleApp);
