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

class ScannerResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var url = `https://api.upcitemdb.com/prod/trial/lookup?upc=888462367967`; // Change to ${this.props.data}
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData.items,
          dataSource: this.state.dataSource.cloneWithRows(responseData.items[0].offers),
          loaded: true
        });
      })
      .done();
  }

  render() {
    if (!this.state.items) {
      return this.renderLoadingView();
    }

    var item = this.state.items[0];
    return this.renderProduct(item);
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
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderData.bind(this)}
        />
      </View>
    );
  }

  renderData(data) {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{data.merchant}</Text>
          <Text style={styles.text}>{data.link}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    height: 350,
  }
});

module.exports = ScannerResult;
