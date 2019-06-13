/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from './router';
import Router from './router';

export default class App extends Component<Props> {
  render(){
    return <Router />;
  }
}


const styles = StyleSheet.create({

  container:{
    flex:1
  }
})