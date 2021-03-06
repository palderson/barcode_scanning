'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  NavigatorIOS,
  Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Web from '../Web';
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
    var url = `https://s3-us-west-2.amazonaws.com/barcode-scan-frame/file.json`; // https://api.upcitemdb.com/prod/trial/lookup?upc=${this.props.data}
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
        {/* <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>This is the title</Text>
        </View> */}
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
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{this.state.items.title}</Text>
        </View>

        <View style={styles.recommendedPriceBox}>
          <Text style={styles.priceIntroText}>PURCHASE IN STORE{"\n"}IF PRICED BELOW</Text>
          <Text style={styles.recommendedPrice}>$499</Text>
        </View>
        <Text style={styles.onlineStorePriceHeading}>Online store prices</Text>
      </View>
    )
  }

  _renderRow(data) {
    return (
      <TouchableHighlight
          style={styles.storeCard}
          onPress={ () => this._openPage(data)}
          underlayColor={'transparent'}
        >
        <View style={styles.storeCardContent}>
          <View style={styles.merchantDomain}>
            <Text style={styles.merchant}>{data.merchant.toUpperCase()}</Text>
            <Text style={styles.domain}>{data.domain}</Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceArrow}>
              <Text style={styles.price}>${Math.trunc(data.price)}   </Text>
              <Icon
                name="angle-right"
                size={25}
                color="grey"
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _openPage(data){
    this.props.navigator.push({
      title: 'Site',
      component: Web,
      passProps: {
        data: data.link
      }
    });
    console.log(data.link);
  }

  componentWillUnmount() {
    this.props.returnHandler()
  }
}

module.exports = Product;
