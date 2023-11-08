import React, {useState} from 'react'
import {View, Text, Pressable} from 'react-native'
import TextField from './generals/Textfield.jsx'
import PasswordField from './generals/Passwordfield.jsx'
import { isOnlyText, isPasswordValid, isValidCode, isValidEmail } from '../../regex.js'

const Register = () => {
    //----------------------------  Hooks ----------------------------
    const {inputName, setInputName} = useState()
    const {inputlastName, setInputLastname} = useState()
    const {inputCode, setInputCode} = useState()
    const {inputEmail, setInputEmail} = useState()
    const {inputPassword, setInputPassword} = useState()
    const {inputConfirPassword, setInputConfirPassword} = useState()
    //----------------------------  End hooks ----------------------------
    //---------------------------  Functions  ----------------------------
    const verifyInputName = text => {
        setInputName(text)
        if(!isOnlyText.test(text)){
            Alert.alert(
                title='Nombres Invalido',
                message='El nombre solo puede contener letras y acentos'
                )
            setInputName('')
        }
    }
    const verifyInputLastname = text => {
        setInputLastname(text)
        if(!isOnlyText.test(text)){
            Alert.alert(
                title='Apellidos Invalidos',
                message='El apellido solo puede contener letras y acentos'
                )
            setInputLastname('')
        }
    }
    const verifyInputCode = text => {
        setInputCode(text)
        if(!isValidCode.test(text)){
            Alert.alert(
                title='Código Invalido',
                message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial ej:( !,",#,$,%,&,/,(,) )'
                )
            setInputCode('')
        }
    }
    const verifyInputEmail = text => {
        setInputEmail(text)
        if(!isValidEmail.test(text)){
            Alert.alert(
                title='Correo electrónico invalido',
                message='Verifique que solo tenga simbolos como "-","." y "@" '
                )
            setInputEmail('')
        }
    }
    const verifyInputPassword = () => {
        if(!isPasswordValid.test(inputPassword)){
            Alert.alert(title='Contraseña invalida',
            message='La contraseña debe tener ')
            setInputPassword('')
        }
    } 
    const validEqualPassword = () => {
        if(inputPassword !== inputConfirPassword){
            Alert.alert(title='No hay Coincidencia',
            message='Las contraseñas no coinciden')
        }
    }
    const validFieldEmpty = () => {
        if( inputName.trim() === '' ||
            inputlastName.trim() === '' || 
            inputCode.trim() === '' || 
            inputEmail === '' ||
            inputPassword === '' ||
            inputConfirPassword === '') {
                Alert.alert(title='Algún campo de texto vacío',
                message='No debe quedar ningún campo de texto vacío')
            }
    }
    //---------------------------  End functions  ----------------------------

    return(
    <View>
        <View>
            <Header></Header>
        </View>

        <View>
            <TextField 
            placeholder='Nombres' 
            autoCapitalize='words' 
            value={inputName}
            handlerChangeText={verifyInputName}/>
            <TextField 
            placeholder='Apellidos' 
            autoCapitalize='words'
            value={inputlastName} 
            handlerChangeText={verifyInputLastname}/>
            <TextField 
            placeholder='Código de estudiante'
            value={inputCode} 
            handlerChangeText={verifyInputCode}/>
            <TextField 
            placeholder='correo electrónico'
            value={inputEmail} 
            handlerChangeText={verifyInputEmail}/>
            <PasswordField 
            placeholder='contraseña' 
            initSecure
            handlerChangeText={verifyInputPassword}
            />
            <PasswordField 
            placeholder='confirmar contraseña' 
            initSecure
            handlerChangeText={validEqualPassword}
            />
            <Pressable
            onPress={validFieldEmpty}
            >
                <Text>Registrar</Text>
            </Pressable>
            <Text>¿Ya tienes una cuenta? <Text>inicia sesion</Text></Text>
        </View>
        
        <View>
            <Footer></Footer>
        </View>
    </View>
    )
}

export default Register

