import React from 'react'
import { Pressable, Text, StyleSheet} from 'react-native'
import theme from './../theme.js'
import {allowMultiStyle} from '../functionsFronted.js'

const ButtonText = (
    {
        containerStyle=undefined,
        contentStyle=undefined,
        text,
        onPress
    }
) => {
    
    const fnContainterStyle = allowMultiStyle(style.default, containerStyle)
    
    const fnContentStyle = allowMultiStyle(style.default, contentStyle)
    
    return (
        <Pressable
        style={fnContainterStyle}
        onPress={onPress}>
            <Text 
            style={fnContentStyle}>
                {text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    default:{
        borderRadius:20,
        backgroundColor:theme.colors.secondary,
        justifyContent:'center'
    }
})

export default ButtonText