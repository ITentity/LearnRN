import React from 'react';
import {
  Button,
} from 'react-native';

export default class AllContactsScreen extends React.Component {
  render() {
    return (<Button
      onPress={() => this.props.navigation.navigate('Chat', { user: 'bingo' })}
      title="Chat with bingo"
    />);
  }
}
