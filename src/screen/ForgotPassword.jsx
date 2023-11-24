import React from 'react'
import { View, Text} from 'react-native'
import TextField from './../components/Textfield.jsx'
import ButtonText from './../components/ButtonText.jsx'
import {sendEmail} from './../service/sendEmail.js'

const ForgotPassword = ({navigation}) => {
    return(
        <View>
            <Text>Ingresa tu dirección de correo electrónico</Text>
            <TextField
            placeholder='example@gmail.com'
            />
        <Text>Volver a inicio de sesion</Text>
        <ButtonText
        text='Enviar'
        />
        </View>
    )
}

export default ForgotPassword