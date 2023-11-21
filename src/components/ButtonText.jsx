import React from 'react'
import { View, Pressable, Text } from 'react-native'

const ButtonText = (
    {
        containerStyle:undefined,
        contentStyle:undefined,
        text,
        onPress
    }
) => {
    <View style={containerStyle}>
        <Pressable onPress={onPress}>
            <Text style={contentStyle}>{text}</Text>
        </Pressable>
    </View>
}

export default ButtonText