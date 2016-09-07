'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Light',
    marginTop: 30
  },
  camera: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 250,
    width: 270,
    borderWidth: 7,
    borderColor: 'white',
    backgroundColor: 'transparent',
  }
});

module.exports = styles;
