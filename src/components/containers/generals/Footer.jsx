import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import theme from '../../../theme.js'

const Footer = () => {
    return (
        <View style={style.container}>
            <Text>Grupo de trabajo SKYNET</Text>
            <Text style={style.end}>desarrollo-de-software&commat;saba.co</Text>
            <Text style={style.init}>2023</Text>
            <Text>&copy;</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        color:theme.colors.primary,
        backgroundColor:theme.colors.secondary,
        textAlign:'center'
    },
    end:{
        marginBottom:10
    },
    init:{
        marginTop:10
    }
})
