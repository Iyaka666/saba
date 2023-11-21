import React from 'react'
import { View } from 'react-native'
import {verifyResetPassword} from './../validationValidValues.js'

const Verification = () => {
    return (
    <View>
        <Text>Ingresa tu número de Verificació  n</Text>
        <Text>¿sí no has recibido un código? <Text>Reenvia</Text></Text>
        <ButtonText 
        text='Enviar'
        />
    </View>
    )
}

export default Verification