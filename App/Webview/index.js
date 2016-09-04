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
         <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.container}
          source={{uri: this.props.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={false}
        />
       </View>
     );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

module.exports = Webview;
