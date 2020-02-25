
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList , Image} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Base from '../Base';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseStyles from '../../common/baseStyles'
import {inbox} from '../../common/data'
Icon.loadFont();


class Messenger extends Component {
  renderItem = ({item, index}) => 
    <TouchableOpacity style={styles.inboxCard}>
      <Image source = {{uri: item.avatar_url}} style={{height: 50, width: 50, marginRight: 16}} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.messengerText}>Messenger</Text>
        <FlatList 
          data = {inbox}
          renderItem = {this.renderItem}
          keyExtractor={item => item.id}
        />
        
        
      </SafeAreaView>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messengerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  inboxCard: {
    flexDirection: 'row', 
    alignItems: 'center', 
    // backgroundColor: 'red',
    // marginBottom: 8,
    paddingVertical: 8,
    borderBottomColor: BaseStyles.color.gray,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    marginTop: 24


  }
  

 
});

export default Messenger