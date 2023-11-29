import React from 'react'
import { Text, Linking, Pressable } from 'react-native'
import { allowMultiStyle } from '../functionsFronted.js'

const Browser = (
    {
        destiny,
        link = undefined, 
        text,
        containerStyle = null, 
        contentStyle = null,
        navigate = undefined,
        navigation
    }
    ) => { 

        const fnContainerStyle = allowMultiStyle(containerStyle)
        const fnContentStyle = allowMultiStyle(contentStyle)

        return(
        <Pressable
            style={fnContainerStyle} 
            onPress={() => {
                if(destiny === 'internet') Linking.openURL(link)
                if(destiny === 'interscreens') navigation.navigate(navigate)
            }}>
                <Text style={fnContentStyle}>{text}</Text>
        </Pressable>
        )
}


export default Browser