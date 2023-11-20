import {isNumberAndOthers, isPasswordValid} from './regex.js'
import {Alert} from 'react-native'

export const verifyInputUser = (inputUser, setInputUser ) => {
    setInputUser(inputUser)
    if(!isNumberAndOthers.test(inputUser)) {
        Alert.alert(
            title='Usuario invalido', 
            message='El usuario solo acepta números y "-" ejemplo: 12345678-9'
            )
        setInputUser('')
    }
}

export const verifyInputPassword = (inputPassword, setInputPassword) => {
    setInputPassword(inputPassword)
    if(!isPasswordValid.test(inputPassword)) {
        Alert.alert(
            title='Contraseña Invalida',
            message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial ej:( !,",#,$,%,&,/,(,) )'
            )
        setInputPassword('')
    }
}