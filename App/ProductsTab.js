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

import Products from './Products';

export default class ProductsTab extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor='#7ec0ee'
        titleTextColor='white'
        backButtonTitle=' '
        initialRoute={{
          title: 'My Products',
          component: Products,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
