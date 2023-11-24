import { 
    isPasswordValid, 
    isOnlyText, 
    isValidCode, 
    isValidEmail
} from './regex.js'
import {Alert} from 'react-native'

//Valida que el Nombre solo contenga letras o acentos
export const verifyName = (name, setName) => {
    if(!isOnlyText.test(name)){
        Alert.alert('Nombres Invalido','El nombre sólo puede contener letras y acentos')
        setName('')
        return false
    }
    return true
}

//Valida que el apellido sólo se pueda contener letras y letras con acentos
export const verifyLastname = (lastname, setLastname) => {
    if(!isOnlyText.test(lastname)){
        Alert.alert('Apellidos Invalidos','El apellido solo puede contener letras y acentos')
        setLastname('')
        return false
    }
    return true
}

//Valida que el código de logeo sea ingresado correctamente
export const verifyCode = (code, setCode) => {
    if(!isValidCode.test(code)){
        Alert.alert('Código Invalido',
        'Debe ser algo como 2012345-1234 ó una cédula de 7 a 10 digitos más su letra correspondiente')
        setCode('')
        return false
    }
    return true
}

//valida que la direccion de correo electrónico sea ingresada correctamente
export const verifyEmail = (email, setEmail) => {
    if(!isValidEmail.test(email)){
        Alert.alert('Correo electrónico invalido',
        'Verifique que solo tenga simbolos como "-","." y "@" ')
        setEmail('')
        return false
    }
    return true
}

//Valida que la contraseña sea ingresada correctamente
export const verifyPassword = (password, setPassword) => {
    if(!isPasswordValid.test(password)) {
        Alert.alert('Contraseña Invalida','Debe contener mínimo 8 cáracteres')
        setPassword('')
        return false
    }
    return true
}

//Valida que dos contraseñas iguales
export const validEqualPassword = (currentPassword, newPassword) => {
    if(currentPassword !== newPassword){
        Alert.alert('No hay Coincidencia','Las contraseñas no coinciden')
        return false
    }
    return true
}

//Valida que las cadenas de caracteres de n datos sean espacios vacios
export const validFieldEmpty = (...content) => {
    if( content.every(str => str.trim() === '') ) {
        Alert.alert('Campo de texto vacío','No debe quedar ningún campo de texto vacío')
        return false
    }
    return true
}