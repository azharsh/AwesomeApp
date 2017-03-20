/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {   AppRegistry,
  StyleSheet,
  Text,
  Image,
View } from 'react-native';




class AwesomeApp extends Component {
  render() {
    return (
      <View >
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./index.png')} />
          <Image style={styles.photo} source={require('./lala.jpg')} />
          <Text style={styles.name}>Azhar Suhada</Text>
          <Text style={styles.class}>#batch 2</Text>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        
    alignItems: 'center',
    
  },
 
 
  logo: {
    marginTop: 10,
    width: 108.75,
    height: 45.5,
  },
  photo: {
    marginTop: 60,
    width: 170,
    height: 170,
    borderRadius: 60,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
   
  },
  class: {
    fontSize: 15,
  }
});

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);