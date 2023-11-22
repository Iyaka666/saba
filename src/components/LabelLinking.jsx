import React from 'react'
import { View, Text, Linking, Pressable } from 'react-native'

const LabelLinking = (
    {
        link, 
        text,
        containerStyle=undefined, 
        contentStyle=undefined
    }
    ) => {    
    return (
        <View style={containerStyle}>
            <Pressable onPress={() => Linking.openURL(link)}>
                <Text style={contentStyle}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default LabelLinking