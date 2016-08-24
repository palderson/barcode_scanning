'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

class ScannerResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${this.props.data}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData.items,
        });
      })
      .done();
  }
  render() {
    if (!this.state.items) {
      return this.renderLoadingView();
    }

    var product = this.state.items[0];
    return this.renderProduct(product);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Finding product...
        </Text>
      </View>
    );
  }

  renderProduct(item) {
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.description}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  }
});

module.exports = ScannerResult;
