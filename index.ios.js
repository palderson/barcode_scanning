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
  TabBarIOS
} from 'react-native';

import Main from './App/Main'; // Change to ScannerView
import Products from './App/Products/Products'; // Change to ScannerView

class barcode_read extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'camera',
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          name="Camera"
          title="Camera"
          selected={this.state.selectedTab === 'camera'}
          onPress={() => {
            this.setState({
              selectedTab: 'camera',
            });
          }}>
          <Main/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          name="Products"
          title="Product"
          selected={this.state.selectedTab === 'products'}
          onPress={() => {
            this.setState({
              selectedTab: 'products',
            });
          }}>
          <Products/>
        </TabBarIOS.Item>
      </TabBarIOS>
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
