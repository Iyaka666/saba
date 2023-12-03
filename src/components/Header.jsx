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
import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Constants from 'expo-constants'
import {Entypo, Ionicons} from '@expo/vector-icons'
//--------------- importacion de frameworks fin ----------

//--------------- importacion componentes externos ----------
import { Dialog, Divider } from '@rneui/themed'
//--------------- importacion componentes externos fin ----------

//--------------- otras importaciones ----------
import Logo from './../../assets/svgLogo.svg'
import theme from '../theme.js'

const Header = ({
    screen,
    logoWitdh = undefined,
    logoHeight = undefined,
    navigation = null,
    nameUser = null,
    roll = null
}) => {
    const [visibleDialog, setVisibleDialog] = useState(false)

    const toggleDialog = () => setVisibleDialog(!visibleDialog)

    if( screen === 'login' ){
        return (
        <View style={style.bar}>
            <Logo 
            width={logoWitdh} 
            height={logoHeight}/>
        </View>
        )
    }

    if(screen === 'logout'){
        return  (
        <View style={[style.container, style.bar]}>
            <Logo 
            width={wp(20)} 
            height={hp(10)}/>
            <View style={style.textContainer}>
                    <Text style={style.text}>SABA</Text>
            </View>
        </View>
    )}
    
    if(screen === 'logedIn'){
        return  (
        <View style={[style.container, style.bar]}>
            <Pressable            
            onPress={() => navigation.navigate('Home')}
            >
                <Logo width={wp(20)} height={hp(10)}/>
            </Pressable>
            <Pressable
            onPress={toggleDialog}
            >
                <Ionicons name="person-circle" size={50} color='red' />
            </Pressable>

            <Dialog
                isVisible={visibleDialog}
                onBackdropPress={toggleDialog}
            >
                <Ionicons name="person-circle" size={50*4} color='red' />
                <Text>{nameUser}</Text>
                <View>
                    <Text>{roll}</Text>
                </View>
                <Divider width={2} color="#000"/>
                <Pressable
                onPress={() => navigation.navigate('Login')}
                >
                    <Entypo/>
                    <Text>Cerrar sesion</Text>
                </Pressable>
            </Dialog>
        </View>
    )} 
    throw new Error("La propiedad 'screen' debe ser establecida")
}

const style = StyleSheet.create({
    bar:{
        marginTop: Constants.statusBarHeight,
        alignItems: 'center'
    },
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
