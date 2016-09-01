/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './App/Main';
import Products from './App/Products';

class barcode_read extends Component {
  renderScene(route, navigator) {
    var Component = route.component;
    return (
      <View style={styles.container}>
        <Component
          route={route}
          navigator={navigator}
          topNavigator={navigator} />
      </View>
      )
  }

  render() {
    return (
      <Navigator
        style={styles.wrapper}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        tintColor='#D6573D'
        barTintColor='#FFFFFD'
        titleTextColor='#D6573D'
        navigationBarHidden={true}
        initialRoute={{
          title: '',
          component: Main,
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('barcode_read', () => barcode_read);

module.exports = 'barcode_read';
