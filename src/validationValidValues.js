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
        setName('')
        return {
            title:'Nombres Invalido', 
            message:'El nombre sólo puede contener letras y acentos',
            validation:false
        }
    }
    return {validation:true}
}

//Valida que el apellido sólo se pueda contener letras y letras con acentos
export const verifyLastname = (lastname, setLastname) => {
    if(!isOnlyText.test(lastname)){
        setLastname('')
        return {
            title:'Apellidos Invalidos',
            message:'El apellido solo puede contener letras y acentos',
            validation:false
        }
    }
    return {validation:true}
}

//Valida que el código de logeo sea ingresado correctamente
export const verifyCode = (code, setCode) => {
    if(!isValidCode.test(code)){
        setCode('')
        return {
            title:'Código Invalido', 
            message:'Debe ser algo como 2012345-1234 ó una cédula de 7 a 10 digitos más su letra correspondiente',
            validation:false
        }
    }
    return {validation:true}
}

//valida que la direccion de correo electrónico sea ingresada correctamente
export const verifyEmail = (email, setEmail) => {
    if(!isValidEmail.test(email)){
        setEmail('')
        return {
            title:'Correo electrónico invalido',
            message:'Verifique que solo tenga simbolos como "-","." y "@" ', 
            validation:false
        }
    }
    return {validation:true}
}

//Valida que la contraseña sea ingresada correctamente
export const verifyPassword = (password, setPassword) => {
    if(!isPasswordValid.test(password)) {
        setPassword('')
        return {
            title:'Contraseña Invalida', 
            message:'Debe contener mínimo 8 cáracteres',
            validation:false
        }
    }
    return {
        validation:true
    }
}

//Valida que dos contraseñas iguales
export const validEqualPassword = (currentPassword, newPassword) => {
    if(currentPassword !== newPassword){
        return {
            title:'No hay Coincidencia',
            message:'Las contraseñas no coinciden',
            validation:false
        }
    }
    return {validation:true}
}

//Valida que las cadenas de caracteres de n datos sean espacios vacios
export const validFieldEmpty = (...content) => {
    if( content.some(str => str.trim() === '') ) {
        return {
            title:'Campo de texto vacío',
            message:'No debe quedar ningún campo de texto vacío',
            validation:false
    }
    }
    return {validation:true}
}