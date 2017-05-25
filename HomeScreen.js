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
  zhaozx: {
    screen: RecentChatsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'zhaozx chat',
    }),
  },
  bingo: {
    screen: AllContactsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'bingo chat',
    }),
  },
},
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

// Because MainScreenNavigator is being used as a screen, we can give it navigationOptions
// MainScreenNavigator.navigationOptions = {
//   title: 'My Chats',
// };

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
  },      // 第一个就是显示出来的页面
  Chat: {
    screen: ChatScreen,
  },
},
  {
    mode: 'modal',
    navigationOptions: {
      headerTruncatedBackTitle: '',
      headerTintColor: '#f00',
    },
  },
);


AppRegistry.registerComponent('LearnRN', () => SimpleApp);
