'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ListView
} from 'react-native';

import styles from './styles';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var url = `https://api.upcitemdb.com/prod/trial/lookup?upc=885909575145`; // Change to ${this.props.data}
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData.items[0],
          dataSource: this.state.dataSource.cloneWithRows(responseData.items[0].offers),
          loaded: true
        });
      })
      .done();
  }

  render() {
    if (!this.state.items) {
      return this._renderLoadingView();
    }
  }

  _renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Finding product...
        </Text>
      </View>
    );
  }
  // Remove toolbar and toolbarTitle when not using camera
  render() {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>This is the title</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
          style={styles.content}
        />
      </View>
    );
  }

  _renderHeader() {
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>{this.state.items.title}</Text>
          <Text style={styles.subHeading}>{this.state.items.description}</Text>
        </View>
    )
  }

  _renderRow(data) {
    return (
      <View style={styles.storeCard}>
        <View style={styles.storeCardContent}>
          <Text style={styles.merchant}>{data.merchant}</Text>
          <Text style={styles.price}>${data.price}</Text>
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    this.props.returnHandler()
  }
}

module.exports = Product;
