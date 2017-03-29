
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  sync,
  queueSync,

  sendMessages,
  queueSendMessages,
} from '../actions';

import {
  Button,
  CardSection,
} from './common';


class Main extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { conainerStyle } = styles;
    return (
      <View style={conainerStyle}>

        <CardSection>
          <Button onPress={() => this.props.sync()}> Sync Action</Button>
        </CardSection>

        <CardSection style={{ marginTop: 30 }}>
          <Button onPress={() => this.props.sendMessages()}> Send Messages Action</Button>
        </CardSection>

        <CardSection style={{ marginTop: 30 }}>
          <Button onPress={() => this.props.queueSync()}> Sync Queue Action</Button>
        </CardSection>


        <CardSection style={{ marginTop: 30 }}>
          <Button onPress={() => this.props.queueSendMessages()}> Send Messages Queue Action</Button>
        </CardSection>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  conainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});


// const mapStateToProps = (state) => ({
//   console.log(state);
//   return n
// });


export default connect(null, { sync, queueSync, sendMessages, queueSendMessages })(Main);
