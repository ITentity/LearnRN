import React from 'react';
import {
  Button,
} from 'react-native';

export default class RecentChatsScreen extends React.Component {
  render() {
    return (<Button
      onPress={() => this.props.navigation.navigate('Chat', { user: 'zhaozx' })}
      title="Chat with zhaozx"
    />);
  }
}
