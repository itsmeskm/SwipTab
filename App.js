import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Navigator from './Component/Navigator';
import Screen from './Component/Screen';

export default function App() {
  return (
    <View style = {styles.container}>
      <View style= {styles.navigation}>
        <Navigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navigation: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
