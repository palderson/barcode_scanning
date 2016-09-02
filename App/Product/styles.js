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
  recommendedPriceBox: {
    backgroundColor:'#81c04d',
    paddingTop:50,
    paddingBottom:50,
    flexDirection:'column',
    marginBottom: 50
  },
  priceIntroText: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20
  },
  recommendedPrice: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
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
