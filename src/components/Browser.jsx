import React from 'react'
import {Text, Linking, Pressable } from 'react-native'
import { allowMultiStyle } from '../functionsFronted'

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
        const fnContainerStyle = allowMultiStyle(null, containerStyle)
        const fnContentStyle = allowMultiStyle(null, contentStyle)

        return(
        <Pressable
            style={fnContainerStyle} 
            onPress={() => {
                if(destiny === 'internet') Linking.openURL(link)
                if(destiny === 'interscreens') navigation.navigate(navigate)
                throw new Error('Componente Browser - No se ha ingresado ningún destino') 
            }}>
                <Text style={fnContentStyle}>{text}</Text>
        </Pressable>
        )
}


export default Browser