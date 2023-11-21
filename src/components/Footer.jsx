import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import LabelLinking from './LabelLinking.jsx'
import theme from '../theme.js'

const Footer = (props) => {
    const TEXT_STYLE = style.text
    handlerGoLink = () => null
    
    if(props.noPqrs){
    return (
        <View style={style.container}>
            <Text style={TEXT_STYLE}>Grupo de trabajo SKYNET</Text>
            <Text style={[style.end, TEXT_STYLE]}>desarrollo-de-software@saba.co</Text>
            <Text style={[style.init, TEXT_STYLE]}>2023</Text>
            <Text style={TEXT_STYLE}>&copy;</Text>
        </View>
    )
    }else        
        return(
            <View style={style.container}>
            <Text style={TEXT_STYLE}>Grupo de trabajo SKYNET</Text>
            <Text style={[style.end, TEXT_STYLE]}>desarrollo-de-software@saba.co</Text>
            
            <LabelLinking 
            link="https://forms.gle/tV5dJmQmqbgwX1M9A"
            text='PQRS' 
            contentStyle={style.link}/>
            
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
    },
    link:{
        textDecoration:'underline'
    }
})

export default Footer
