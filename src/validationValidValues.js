import { 
    isPasswordValid, 
    isOnlyText, 
    isValidCode, 
    isValidEmail
} from './regex.js'
import {Alert} from 'react-native'

//Valida que el Nombre solo contenga letras o acentos
export const verifyInputName = (name, setName) => {
    if(!isOnlyText.test(name)){
        Alert.alert(
            title='Nombres Invalido',
            message='El nombre sólo puede contener letras y acentos'
            )
        setName('')
        return false
    }
    return true
}

//Valida que el apellido contenga letras o acentos
export const verifyInputLastname = (lastname, setLastname) => {
    if(!isOnlyText.test(lastname)){
        Alert.alert(
            title='Apellidos Invalidos',
            message='El apellido solo puede contener letras y acentos'
            )
        setLastname('')
        return false
    }
    return true
}

//Valida que el código de logeo funcione correctamente
export const verifyInputCode = (code, setCode) => {
    if(!isValidCode.test(code)){
        Alert.alert(
            title='Código Invalido',
            message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial ej:( !,",#,$,%,&,/,(,) )'
            )
        setCode('')
        return false
    }
    return true
}

//valida que la direccion de correo electronico este bien escrita
export const verifyInputEmail = (email, setEmail) => {
    if(!isValidEmail.test(email)){
        Alert.alert(
            title='Correo electrónico invalido',
            message='Verifique que solo tenga simbolos como "-","." y "@" '
            )
        setEmail('')
        return false
    }
    return true
}

export const verifyInputPassword = (password, setPassword) => {
    if(!isPasswordValid.test(password)) {
        Alert.alert(
            title='Contraseña Invalida',
            message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial ej:( !,",#,$,%,&,/,(,) )'
            )
        setPassword('')
        return false
    }
    return true
}

export const validEqualPassword = (currentPassword, newPassword) => {
    if(currentPassword !== newPassword){
        Alert.alert(title='No hay Coincidencia',
        message='Las contraseñas no coinciden')
        return false
    }
    return true
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