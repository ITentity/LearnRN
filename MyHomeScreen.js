import React from 'react';
import {
  Text, StyleSheet, Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./cal.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Text>zzz</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
