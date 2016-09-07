/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';

import ScanTab from './App/ScanTab';
import Products from './App/Products';
import Product from './App/Product'; // Remove if on Device

import Icon from 'react-native-vector-icons/FontAwesome';

class barcode_read extends Component {
  constructor(props){
    super();
    this.state = {selectedTab: 'ScanTab'};
  }
  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'ScanTab'}
          systemIcon='search'
          onPress={() => {
            this.setState(
              {selectedTab: 'ScanTab'}
            );
          }}
        >
          <ScanTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Products'}
          systemIcon='history'
          onPress={() => {
            this.setState(
              {selectedTab: 'Products'}
            );
          }}
        >
          <Products />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('barcode_read', () => barcode_read);
