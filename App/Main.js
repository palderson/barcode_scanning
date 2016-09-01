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
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Scanner from './Scanner/Scanner';
import Products from './Products/Products';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'camera'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Camera"
          selected={this.state.selectedTab === 'camera'}
          iconName={'camera'}
          iconSize={20}
          onPress={() => {
            if (this.state.selectedTab !== 'camera') {
              this.setState({
                selectedTab: 'camera'
              });
            } else if (this.state.selectedTab === 'camera') {
              this.refs.cameraRef.popToTop();
            }
          }}>
          {this.renderCameraView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
         title="My Products"
         selected={this.state.selectedTab === 'products'}
         iconName={'list'}
         iconSize={20}
         onPress={() => {
           if (this.state.selectedTab !== 'products') {
             this.setState({
               selectedTab: 'products'
             });
           } else if (this.state.selectedTab === 'products') {
             this.refs.productsRef.popToTop();
           }
         }}>
         {this.renderProductsView()}
       </Icon.TabBarItem>
      </TabBarIOS>
    )
  }

  renderCameraView() {
   return (
     <NavigatorIOS
       style={styles.container}
       tintColor='#D6573D'
       barTintColor='#FFFFFD'
       titleTextColor='#D6573D'
       ref='cameraRef'
       initialRoute={{
         title: 'Scan Barcode',
         component: Scanner
       }} />
    )
 }

 renderProductsView() {
   return (
     <NavigatorIOS
       style={styles.container}
       tintColor='#D6573D'
       barTintColor='#FFFFFD'
       titleTextColor='#D6573D'
       ref='productsRef'
       initialRoute={{
         title: 'My Products',
         component: Products
       }} />
    )
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

module.exports = Main;
