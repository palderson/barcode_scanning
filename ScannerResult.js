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
      items: [],
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

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
        />
      </View>
    );
  }

  _renderHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.items.description}</Text>
      </View>
    )
  }

  _renderRow(data) {
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
      flexDirection: 'column',
      padding: 15
  },
  listViewContainer: {
      flex: 1,
      flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});

module.exports = ScannerResult;
