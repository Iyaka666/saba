import React from 'react'
import { View } from 'react-native'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'

const ResetPassword = ({navigation}) => {
    const conditionsPassword = 'Mínimo 8 cáracteres, un número, un caracter especial'
    return (
        <View>
            <Text>Ingrese una nueva contraseña</Text>
            <PasswordField
            initSecure
            placeholder = {conditionsPassword}
            />
            <Text>Confirma contraseña</Text>
            <PasswordField
            initSecure
            placeholder = {conditionsPassword}
            />
            <ButtonText
            text='Enviar'
            />
        </View>
    )
}

export default ResetPassword
