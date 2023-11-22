import React from 'react'
import { View, Pressable, Text, StyleSheet} from 'react-native'
import theme from './../theme.js'

const ButtonText = (
    {
        containerStyle=undefined,
        contentStyle=undefined,
        text,
        onPress
    }
) => {
    const combinedStyles = Array.isArray(containerStyle) ? [style.default, ...containerStyle] :
        [style.default, containerStyle]
    return (
    <View>
        <Pressable
        style={combinedStyles}
        onPress={onPress}>
            <Text style={contentStyle}>{text}</Text>
        </Pressable>
    </View>)
}

const style = StyleSheet.create({
    default:{
    borderRadius:20,
        backgroundColor:theme.colors.secondary,
        justifyContent:'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8
    }
})

export default ButtonText