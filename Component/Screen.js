import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Screen = (props) => {
  let title = props.title;
  return (
    <View style = {styles.screen}>
      <Text style = {styles.title}>{title} </Text>
      <Button
          title="Remove Tab"
          onPress={() => {
            props.removeTab()
          }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%' ,
      height:'100%'
    },
    title: {
      color: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:8,
      fontSize: 28,
      fontWeight: 'bold',
    },
  });

export default Screen