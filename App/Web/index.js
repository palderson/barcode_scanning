import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  Text,
  View
} from 'react-native';

export default class Web extends Component {
  render() {
     return (
       <WebView
         source={{uri: this.props.data}}
       />
     );
   }
};
