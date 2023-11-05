import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Passwordfield from './generals/Passwordfield.jsx'
import Header from './generals/Header.jsx'
import Footer from './generals/Footer.jsx'
import Textfield from './generals/Textfield.jsx'
import theme from './../../theme.js'

const Login = () => {
    return (
        <View style={style.container}>
            <Header></Header>
            <Text style={style.text}>Sistema de asignaci&oacute;n y b&uacute;squeda de      aulas</Text>
            <Textfield placeholder='Usuario' autoCapitalize='words'></Textfield>
            <Passwordfield placeholder='Contrase&ntilde;a' initSecure></Passwordfield>
            <Footer></Footer>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.primary
    },
    text:{
        fontSize: 36,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    }
})

export default Login