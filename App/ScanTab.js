/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Scanner from './Scanner';
import Product from './Product';

export default class ScanTab extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Scan Barcode',
          component: Scanner
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
