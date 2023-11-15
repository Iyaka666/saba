import React, { useState } from 'react'
import {View, TextInput, Pressable, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import theme from '../theme.js'

const Passwordfield = (props) => {
    let typeEye = "eye";
    //----------------------------- Hooks -----------------------------
    const [secure, setSecure] = useState(props.initSecure)
    //----------------------------- end Hooks -------------------------
    const handlerEye = () => {
        setSecure(!secure)
        typeEye = !secure ? "eye-with-line":typeEye
    }
    
    return (
    <View style={style.container}>
        <TextInput
        handlerChangeText={props.handlerChangeText}
        secureTextEntry={secure}
        placeholder={props.placeholder}
        placeholderTextColor="#555555"
        style={style.textInput}>
        </TextInput>
        <Pressable        
        onPress={handlerEye}
        style={style.eye}>
            <Entypo 
            name={typeEye} 
            size={24} 
            color={theme.colors.secondary}>
            </Entypo>
        </Pressable> 
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    textInput:{
        flex:1,
        marginTop:20,
        marginLeft:theme.margins.fieldsL,
        marginRight:theme.margins.fieldsR,
        paddingLeft:theme.paddings.fields,
        paddingRight:theme.paddings.fields,
        paddingTop:theme.paddings.fieldsVertical,
        paddingBottom:theme.paddings.fieldsVertical,
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        borderColor:theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight:theme.fontWeight.thin,
        position:'relative'
    },
    eye:{
        position:'absolute',
        top:25,
        left:308,
        zIndex:5
    }
})

export default Passwordfield