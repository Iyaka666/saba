import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import theme from './../../../theme.js'

const Header = () => {
    return (
        <View>
            <Image/>
            <Image/>
            <Image/>
        </View>
    )
}

const style=StyleSheet.create({
    view:{
        backgroundColor:theme.colors.primary
    }
})
