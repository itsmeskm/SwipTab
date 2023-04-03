import { View, Text,Button } from 'react-native'
import React from 'react'

const TabList = ({id,modifyScreen}) => {
    const title  = `Tab ${id}`;
    return (
        <View key = {id}>
            <View>
                <Button 
                    title={title} 
                    onPress={() => {
                        modifyScreen(id);
                    }}
                />
            </View>
        </View>
    )
}

export default TabList

