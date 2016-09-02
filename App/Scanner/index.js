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
  NavigatorIOS,
  Navigator
} from 'react-native';

import Main from '../Main'
import ScannerComponent from './ScannerComponent';
import Product from '../Product';
import styles from './styles';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScannerComponent resultHandler={this.handleResult.bind(this)}/>
      </View>
    );
  }

  handleResult(result) {
      if (!this.state.scanned) {
        this.state.scanned = true
        this.props.navigator.push({title: 'Results', component: Product, passProps: {data: result.data, returnHandler: this.reset.bind(this)}});
      }
  }

  reset() {
    this.state.scanned = false
  }
};

module.exports = Scanner;
