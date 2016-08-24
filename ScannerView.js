'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';
import Scanner from './Scanner';
import ScannerResult from './ScannerResult';

class ScannerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Scanner style={styles.scanner} resultHandler={this.handleResult.bind(this)}/>
      </View>
    );
  }

  handleResult(result) {
    if (!this.state.scanned) {
      this.state.scanned = true
      this.props.navigator.push({title: 'Scan Result', component: ScannerResult, passProps: {data: result.data, returnHandler: this.reset.bind(this)}});
    }
  }

  reset() {
    this.state.scanned = false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  scanner: {
  }
});

module.exports = ScannerView;
