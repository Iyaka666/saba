import React from 'react'
import { View, Text, Linking, Pressable } from 'react-native'

const Browser = (
    {
        destiny,
        link = undefined, 
        text,
        containerStyle = undefined, 
        contentStyle = undefined,
        navigate = undefined,
        navigation
    }
    ) => { 
        return(<View style={containerStyle}>
            <Pressable onPress={() => {
                if(destiny === 'internet') Linking.openURL(link)
                if(destiny === 'interscreens') navigation.navigate(navigate)
                throw new Error('No se ha ingresado ningún destino') 
            }}>
                <Text style={contentStyle}>{text}</Text>
            </Pressable>
        </View>
        )
}


export default Browser