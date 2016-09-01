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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

module.exports = Scanner;
