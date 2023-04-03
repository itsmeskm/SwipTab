import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ScrollView
} from 'react-native';
import Screen from './Screen';
import TabList from './Tablist';

const Navigator = () => {
    const [tabCount, setTabCount] = useState(0);
    const [screenTitle,setScreenTitle] = useState("");
    
    const modifyTitle = (props) => {
        setScreenTitle(`Welcome to Screen ${props}`);
    }
    const removeTab = () =>{
        if(tabCount)
        setTabCount(tabCount-1);
        setScreenTitle("Welcome to Home Screen");
    }

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.top}>
                <View style={styles.heading}>
                    <Text style={styles.title}>
                        Click on the below tab icon to modify the tabs in the screen
                    </Text>
                </View>
                <Button
                    title="Add New Tab"
                    onPress={() => tabCount<30 && setTabCount(tabCount+1)}
                />
            </View>
            <View style = {styles.row}>
                {[...Array(tabCount)].map((value,index) => (
                    <TabList key={index+1} id = {index+1} modifyScreen = {() => {modifyTitle(index+1)}}/>
                    )
                )}
            </View>
            <View style={styles.screen}>
                <Screen title = {screenTitle ? screenTitle : "Welcome to Home Screen/Please click on Add New tab"} removeTab = {removeTab} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title: {
        textAlign: 'center',
        justifyContent:'center',
        alignContent:'center',
        marginVertical: 6,
        fontSize: 24,
        fontWeight: 'bold',
    },
    heading: {
        height:50,
        marginBottom: 2,
        backgroundColor: 'powderblue',
    },
    top:{
        flex: 2,
        height:100
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        height:120
    },
    screen:{
        flex: 4,
        height:400,
        width: 850
    }
});

export default Navigator;