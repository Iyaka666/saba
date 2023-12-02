import React, { useState } from 'react'
import {View, TextInput, Pressable, StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import {Entypo} from '@expo/vector-icons'
import theme from '../theme.js'
import { allowMultiStyle } from '../functionsFronted.js'

const Passwordfield = (
    {
        initSecure,
        onChangeText,
        value,
        placeholder,
        containerStyle,
        contentStyle
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
    
    const fnContainerStyle = allowMultiStyle(style.container, containerStyle)
    const fnContentStyle = allowMultiStyle(style.textInput, contentStyle)
    return (
    <View style={fnContainerStyle}>
        <TextInput
        onChangeText={onChangeText}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor="#555555"
        value={value}
        style={fnContentStyle}>
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
        top:hp(1.5),
        left:wp(50),
        zIndex:5
    }
})

export default Passwordfield