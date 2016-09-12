/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet
} from 'react-native';

import ScanTab from './App/ScanTab';
import ProductsTab from './App/ProductsTab';
import DeviceInfo from 'react-native-device-info';

import Icon from 'react-native-vector-icons/FontAwesome';

class barcode_read extends Component {
  constructor(props){
    super();
    this.state = {selectedTab: 'ScanTab'};
  }
  render(){
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="#7ec0ee"
        >
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'ScanTab'}
          title={""}
          iconName={'barcode'}
          iconSize={30}
          onPress={() => {
            this.setState(
              {selectedTab: 'ScanTab'}
            );
          }}
        >
          <ScanTab />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'ProductsTab'}
          title={""}
          iconName={'bars'}
          iconSize={30}
          onPress={() => {
            this.setState(
              {selectedTab: 'ProductsTab'}
            );
          }}
        >
          <ProductsTab />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('barcode_read', () => barcode_read);
