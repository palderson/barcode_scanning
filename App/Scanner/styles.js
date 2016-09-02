'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  camera: {
    height: 250,
    width: 250
  }
});

module.exports = styles;
