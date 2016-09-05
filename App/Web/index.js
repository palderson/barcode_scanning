'use strict';

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  WebView,
  NavigatorIOS
} from 'react-native';

import Product from '../Product';

class Web extends Component {
  render() {
     return (
       <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 20}}
       />
     );
   }
};

var styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: 20
  }
});

module.exports = Web;
