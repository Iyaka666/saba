import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Logo from './../../assets/svgLogo.svg'
import theme from '../theme.js'

const Header = ({
    screen,
    logoWitdh,
    logoHeight,
    navigation
}) => {
    if( screen === 'login' ){
        return <Logo width={logoWitdh} height={logoHeight}/>
    }

    if(screen === 'logout'){
        return  (
        <View style={styleNoLogin.container}>
            <Logo width={wp(20)} height={hp(10)}/>
            <View style={styleNoLogin.textContainer}>
                    <Text style={styleNoLogin.text}>SABA</Text>
            </View>
        </View>
    )}
    
    if(screen === 'logedIn'){
        return  (
        <View style={styleNoLogin.container}>
            <Pressable            
            onPress={() => navigation.navigate('Home')}
            >
                <Logo width={wp(20)} height={hp(10)}/>
            </Pressable>
            <View style={styleNoLogin.textContainer}>
                    <Text style={styleNoLogin.text}>SABA</Text>
            </View>
        </View>
    )} 
}

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
