'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

// Remove all toolbar references when using camera

var styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  content:{
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  subHeading: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 50
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});

module.exports = styles;
