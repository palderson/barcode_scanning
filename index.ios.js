/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import ScannerResult from './ScannerResult'; // Change to ScannerView

class barcode_read extends Component {
  render() {
    return (
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Scan Barcode',
          component: ScannerResult, // ScannerView for camera
        }}/>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('barcode_read', () => barcode_read);
