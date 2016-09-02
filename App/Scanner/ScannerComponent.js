'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import styles from './styles';

class ScannerComponent extends Component {
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

module.exports = ScannerComponent;
