import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

export default class Base extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderScreen()}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
});