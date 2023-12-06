import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import DialogMessage from '../components/DialogMessage.jsx'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'
import { 
    validEqualPassword, 
    validFieldEmpty,
    verifyPassword 
} from '../validationValidValues.js'
import dialog from '../styles/dialog.js'

const ResetPassword = ({navigation}) => {
    const CONDITION_PASSWORD = 'Mínimo 8 cáracteres'

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    

    const handlerSend = () => {
        const equal = validEqualPassword(password, confirmPassword)
        const blankSpace = validFieldEmpty(password, confirmPassword)
        const validPassword = verifyPassword(password, setPassword)
        const validConfPassword = verifyPassword(confirmPassword, setConfirmPassword)
        
        //Verifica contraseñas valida
        if(!validPassword.validation){
            setVisible(true)
            setTitle(blankSpace.title)
            setMessage(blankSpace.message)
        }
        if(!validConfPassword.validation){
            setVisible(true)
            setTitle(blankSpace.title)
            setMessage(blankSpace.message)
        }
        //-------------------------------
        //valida que no este en blanco y si es así revisa si son iguales y permite volver al login
        if(!blankSpace.validation){
            setVisible(true)
            setTitle(blankSpace.title)
            setMessage(blankSpace.message)
        }else{
            if(equal.validation) {
                navigation.navigate('Login')
            }
            else{
                setVisible(true)
                setTitle(equal.title)
                setMessage(equal.message)
            }
        }
}

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header
                screen='logout'
                />
            </View>

            <View style={style.content}>
            <Text style={style.textCenter}>Ingrese una nueva contraseña</Text>
            <PasswordField
            initSecure
            value={password}
            placeholder = {CONDITION_PASSWORD}
            containerStyle={textfield.style}
            contentStyle = {textfield.content}
            onChangeText={text => setPassword(text)}/>
            <Text style = {style.textCenter}>Confirma contraseña</Text>
            <PasswordField
            initSecure
            value={confirmPassword}
            containerStyle={textfield.style}
            contentStyle = {textfield.content}
            placeholder = {CONDITION_PASSWORD}
            onChangeText={text => setConfirmPassword(text)}
            />
            <ButtonText
            text='Enviar'
            containerStyle={button.style}
            contentStyle={button.text}
            onPress={handlerSend}/>
            </View>
            <DialogMessage
            title={title}
            message={message}
            isVisible={visible}
            overlayStyle={[dialog.container, dialog.content]}
            onBackdropPress={setVisible}/>
            <View style={style.footer}>
                <Footer/>
            </View>
        </View>
    )
}

export default ResetPassword

const style = StyleSheet.create({
    container:{
        height: hp(100),
        width: wp(100)
    },
    header:{
        flex:3
    },
    content:{
        flex:6
    },
    footer:{
        flex:1
    },
    textCenter:{
        textAlign: 'center'
    }
})
