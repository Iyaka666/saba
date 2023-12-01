import React from 'react'
import {View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import Login from './../screen/Login.jsx'
import theme from './../theme.js'

const Main = () => {
    return(
        <View style={style.view}>
            <Login></Login>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        marginTop:Constants.statusBarHeight,
        marginLeft: 10,
        backgroundColor: theme.colors.primary
    }
})

export default Main