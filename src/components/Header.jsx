/*Aquí se crea el componente Header
Estructuras
    Login
        - Logo Grande
    Logout
        - Logo Mediano
        - Titulo 'SABA'
    LogedIn 
        - Logo Mediano
        - Boton usuario

Entradas: 
    screen: valor obligatorio, define cual de los diferentes headers es seleccionado
    logoWidth: el ancho del logo
    logoHeight: el alto del logo
    navigation: se debe pasar sí el valor de screen es logedIn
Salida:
    El componente Header determinado
*/

//--------------- importacion de frameworks ----------
import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Constants from 'expo-constants'
//--------------- importacion de frameworks fin ----------

//--------------- otras importaciones ----------
import Logo from './../../assets/svgLogo.svg'
import theme from '../theme.js'

const Header = ({
    screen,
    logoWitdh,
    logoHeight,
    navigation
}) => {
    if( screen === 'login' ){
        return (
        <View style={style.container}>
            <Logo width={logoWitdh} height={logoHeight}/>
        </View>
        )
    }

    if(screen === 'logout'){
        return  (
        <View style={[styleNoLogin.container, style.container]}>
            <Logo width={wp(20)} height={hp(10)}/>
            <View style={styleNoLogin.textContainer}>
                    <Text style={styleNoLogin.text}>SABA</Text>
            </View>
        </View>
    )}
    
    if(screen === 'logedIn'){
        return  (
        <View style={[styleNoLogin.container, style.container]}>
            <Pressable            
            onPress={() => navigation.navigate('Home')}
            >
                <Logo width={wp(20)} height={hp(10)}/>
            </Pressable>
            <View style={styleNoLogin.textContainer}>
                    <Text style={styleNoLogin.text}>SABA</Text>
            </View>
        </View>
    )
    throw new Error("La propiedad 'screen' debe ser establecida")
} 
}

const style = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight + hp(5),
        alignItems: 'center'
    }
})

const styleNoLogin = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    text:{
        fontSize: hp(4),
        color:theme.colors.secondary,
        fontWeight: theme.fontWeight.bold,
        textShadowColor: '#222222',
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 3
    },
    textContainer:{
        alignSelf:'center'
    }
})

export default Header
