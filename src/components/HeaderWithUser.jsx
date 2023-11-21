import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Logo from './../../assets/svgLogo.svg'
import theme from '../theme.js'

const Header = () => {
    return (
        <View style={style.container}>
            <Logo width={50} height={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        textAlign:'center',
        fontSize: 72,
        color:theme.colors.secondary,
        fontWeight: theme.fontWeight.bold,
        textShadowColor: '#222222',
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 3
    }
})

export default Header
