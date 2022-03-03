import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class RandomNumber extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
  };

  handlePress = () => {
    console.log(this.props.number);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.random}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 35,
    fontSize: 35,
    textAlign: 'center',
  },
});
