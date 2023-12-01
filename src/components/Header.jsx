import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Logo from './../../assets/svgLogo.svg'
import theme from '../theme.js'

const Header = ({
    screen,
    logoWitdh,
    logoHeight
}) => {
    if( screen === 'login' ){
        return(
            <View>
                <Logo width={logoWitdh} height={logoHeight}/>
            </View>
        )
    }
    
    if(screen === 'noLogin'){
        return  (
        <View style={styleNoLogin.container}>
            <View>
                <Logo width={wp(20)} height={hp(10)}/>
            </View>

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
