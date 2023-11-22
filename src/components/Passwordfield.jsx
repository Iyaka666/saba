import React, { useState } from 'react'
import {View, TextInput, Pressable, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import theme from '../theme.js'

const Passwordfield = (
    {
        initSecure,
        handlerChangeText,
        value,
        placeholder
    }
) => {
    //----------------------------- Hooks -----------------------------
    const [secure, setSecure] = useState(initSecure)
    const [eyeIcon, setEyeIcon] = useState('eye')
    //----------------------------- end Hooks -------------------------
    const handlerEye = () => {
        setSecure(!secure)
        setEyeIcon(secure ? 'eye':'eye-with-line')
    }
    
    return (
    <View style={style.container}>
        <TextInput
        handlerChangeText={handlerChangeText}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor="#555555"
        value={value}
        style={style.textInput}>
        </TextInput>
        <Pressable        
        onPress={handlerEye}
        style={style.eye}>
            <Entypo 
            name={eyeIcon} 
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