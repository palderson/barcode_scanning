'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

class Webview extends Component {
  render() {
     return (
       <View style={styles.container}>
         <WebView url={this.props.url}/>
       </View>
     );
  }
};

module.exports = Webview;
