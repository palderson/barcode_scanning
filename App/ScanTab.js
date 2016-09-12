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
import Product from './Product'; // Remove for device

export default class ScanTab extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor='#7ec0ee'
        titleTextColor='white'
        backButtonTitle=' '
        initialRoute={{
          title: 'Scan Barcode',
          component: Product, // Scanner for device
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
