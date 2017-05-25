import React from 'react';
import {
  Button, StyleSheet, Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

export default class RecentChatsScreen extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      // <Icon name="address" style={styles.icon} color={tintColor} />
      <Image
        source={require('./cal.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };
  render() {
    return (<Button
      onPress={() => this.props.navigation.navigate('Chat', { user: 'zhaozx' })}
      title="Chat with zhaozx"
    />);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
