import {
    isNumberAndOthers, 
    isPasswordValid, 
    isOnlyText, 
    isValidCode, 
    isValidEmail
} from './regex.js'
import {Alert} from 'react-native'

export const verifyInputName = (inputName, setInputName) => {
    setInputName(inputName)
    if(!isOnlyText.test(inputName)){
        Alert.alert(
            title='Nombres Invalido',
            message='El nombre solo puede contener letras y acentos'
            )
        setInputName('')
    }
}

export const verifyInputLastname = (inputLastname, setInputLastname) => {
    setInputLastname(inputLastname)
    if(!isOnlyText.test(inputLastname)){
        Alert.alert(
            title='Apellidos Invalidos',
            message='El apellido solo puede contener letras y acentos'
            )
        setInputLastname('')
    }
}

export const verifyInputCode = (inputCode, setInputCode) => {
    setInputCode(inputCode)
    if(!isValidCode.test(inputCode)){
        Alert.alert(
            title='Código Invalido',
            message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial ej:( !,",#,$,%,&,/,(,) )'
            )
        setInputCode('')
    }
}

export const verifyInputEmail = (inputEmail, setInputEmail) => {
    setInputEmail(inputEmail)
    if(!isValidEmail.test(inputEmail)){
        Alert.alert(
            title='Correo electrónico invalido',
            message='Verifique que solo tenga simbolos como "-","." y "@" '
            )
        setInputEmail('')
    }
}

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

export const validEqualPassword = (currentPassword, newPassword) => {
    if(currentPassword !== newPassword){
        Alert.alert(title='No hay Coincidencia',
        message='Las contraseñas no coinciden')
    }
}
export const validFieldEmpty = (...content) => {
    if( content.every(str => str.trim() === '') ) {
        Alert.alert(
        title='Campo de texto vacío',
        message='No debe quedar ningún campo de texto vacío')
        return false
    }
    return true
}