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
    backgroundColor: '#f0f0f0',
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
    marginTop: 50,
    marginBottom: 50
  },
  subHeading: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    padding: 15,
    marginTop: 20,
    marginBottom: 50
  },
  storeCard: {
    backgroundColor: 'white',
    borderRadius: 0.25,
    flexDirection: 'column',
    marginBottom: 10
  },
  storeCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  merchantDomain: {
    flexDirection: 'column',
  },
  merchant: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  domain: {
    color: 'grey'
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});

module.exports = styles;
