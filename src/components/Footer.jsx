import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Browser from './Browser.jsx'
import theme from '../theme.js'
import { allowMultiStyle } from '../functionsFronted.js'

const Footer = (
    {
        noPqrs,
        containerStyle
    }
    ) => {
    const TEXT_STYLE = style.text
    handlerGoLink = () => null
    const fnContainerStyle = allowMultiStyle(style.container, containerStyle)
    if(noPqrs){
    return (
        <View style={fnContainerStyle}>
            <Text style={TEXT_STYLE}>Grupo de trabajo SKYNET</Text>
            <Text style={[style.end, TEXT_STYLE]}>desarrollo-de-software@saba.co</Text>
            <Text style={[style.init, TEXT_STYLE]}>2023</Text>
            <Text style={TEXT_STYLE}>&copy;</Text>
        </View>
    )
    }else
        return(
            <View style={fnContainerStyle}>
            <Text style={TEXT_STYLE}>Grupo de trabajo SKYNET</Text>
            <Text style={[style.end, TEXT_STYLE]}>desarrollo-de-software@saba.co</Text>
            
            <Browser 
            destiny='internet'
            link="https://forms.gle/tV5dJmQmqbgwX1M9A"
            text='PQRS' 
            contentStyle={TEXT_STYLE}/>
            
            <Text style={[style.init, TEXT_STYLE]}>2023</Text>
            <Text style={TEXT_STYLE}>&copy;</Text>
        </View>
        )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.secondary,
    },
    text:{
        color:theme.colors.primary,
        textAlign:'center'        
    },
    end:{
        marginBottom:10
    },
    init:{
        marginTop:10
    }
})

export default Footer
