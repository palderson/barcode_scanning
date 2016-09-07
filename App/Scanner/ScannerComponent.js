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
        <Camera
          ref="cam"
          style={styles.camera}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
        >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
          <Text style={styles.text}>Position a barcode within{"\n"}the guide box</Text>
        </View>
        </Camera>
    );
  }

  onBarCodeRead(e) {
    this.props.resultHandler(e)
  }
}

module.exports = ScannerComponent;
