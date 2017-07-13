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
  StyleSheet,
  PixelRatio,
  Image,
} from 'react-native';
import { add } from './flow';
const ImagePicker = require('react-native-image-picker');

export default class App extends Component {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        avatarSource: null,
      };
    }

  selectPhotoTapped() {
    const options = {
      title: '选择一张图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '打开相机',
      chooseFromLibraryButtonTitle: '从相册中选择',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.selectPhotoTapped()}>
          <View>
            <Text>111</Text>
            <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150
  }
});
