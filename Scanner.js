'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

class Scanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref="cam"
          style={styles.camera}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
        >
        </Camera>
      </View>
    );
  }

  onBarCodeRead(e) {
    this.props.resultHandler(e)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  camera: {
    height: 250,
    width: 250
  }
});

module.exports = Scanner;
