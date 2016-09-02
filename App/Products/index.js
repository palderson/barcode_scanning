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

import styles from './styles';

class Products extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>List of products</Text>
      </View>
    )
  }
};

module.exports = Products;
