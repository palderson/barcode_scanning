'use strict';

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

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
  webView :{
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Web;
