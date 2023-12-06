import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Browser from '../components/Browser.jsx'
import TextField from '../components/Textfield.jsx'
import DialogMessage from '../components/DialogMessage.jsx'
import {verifyResetPassword} from './../validationValidValues.js'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'
import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import dialog from '../styles/dialog.js'

const Verification = ({navigation, route}) => {
    const validateCode = 1234
    const {email} = route.params
    const [code, setCode] = useState('')
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handlerSend = () => {
        if(validateCode === parseInt(code)) navigation.navigate('ResetPassword')
        else {
            setVisible(true)
            setTitle('Token Invalido')
            setMessage('El código ingresado no es el correcto')
        }
        if(code.length > 4){
            setVisible(true)
            setTitle('Valor indevido')
            setMessage('Ha ingresado más de los digitos necesarios')
        }
        if(code.trim() === ''){
            setVisible(true)
            setTitle('Campo Vacio')
            setMessage('No ha ingresado ningun token')
        }
    }

    return (
    <View style={style.container}>
        <View style={style.header}>
            <Header screen='logout'/>
        </View>

        <View style={style.content}>
        <View>
            <Text style={style.text}>Ingresa tu número de Verificación</Text>
        </View>
        <View>
            <TextField
            placeholder='Ingrese el código de 4 digitos'
            value={code}
            containerStyle={textfield.style}
            contentStyle={style.contentTxf}
            keyboardType='numeric'
            inputMode='numeric'
            onChangeText={text => setCode(text)}/>
        </View>
        <Browser
        destiny='interscreen'
        text='¿sí no has recibido un código? Reenvia'
        contentStyle={style.text}
        />
        <ButtonText 
        text='Enviar'
        containerStyle={button.style}
        contentStyle={button.text}
        onPress={handlerSend}
        />
        </View>
        <DialogMessage
        title={title}
        message={message}
        isVisible={visible}
        overlayStyle={[dialog.content, dialog.container]}
        onBackdropPress={setVisible}
        />
        <View style={style.footer}>
            <Footer 
            noPqrs/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        height: hp(100),
        width: wp(100)
    },
    header:{
        flex: 3
    },
    content:{
        flex: 6,
        paddingTop: hp(15),
        gap: hp(6)
    },
    footer:{
        flex: 1
    },
    text:{
        fontSize: hp(2.5),
        textAlign: 'center'
    },
    contentTxf:{
        fontSize: hp(2),
        textAlign: 'center'
    }
})

export default Verification