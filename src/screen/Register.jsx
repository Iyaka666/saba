import React, {useState} from 'react'
import { Alert,View,Text} from 'react-native'
import TextField from '../components/Textfield.jsx'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import {
    verifyInputName, 
    verifyInputLastname, 
    verifyInputCode,
    verifyInputEmail,
    verifyInputPassword,
    validEqualPassword,
    validFieldEmpty
} from './../validationValidValues.js'

const Register = ({navigation}) => {
    //----------------------------  Hooks ----------------------------
    const {inputName, setInputName} = useState()
    const {inputlastName, setInputLastname} = useState()
    const {inputCode, setInputCode} = useState()
    const {inputEmail, setInputEmail} = useState()
    const {inputPassword, setInputPassword} = useState()
    const {inputConfirPassword, setInputConfirPassword} = useState()
    //----------------------------  End hooks ----------------------------
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
            handlerChangeText={() => verifyInputName(inputName, setInputName)}/>
            <TextField 
            placeholder='Apellidos' 
            autoCapitalize='words'
            value={inputlastName} 
            handlerChangeText={() => verifyInputLastname(inputlastName, setInputLastname)}/>
            <TextField 
            placeholder='Código de estudiante'
            value={inputCode} 
            handlerChangeText={() => verifyInputCode(inputCode, setInputCode)}/>
            <TextField 
            placeholder='correo electrónico'
            value={inputEmail} 
            handlerChangeText={() => verifyInputEmail(inputEmail, setInputEmail)}/>
            <PasswordField 
            placeholder='contraseña' 
            initSecure
            handlerChangeText={() => verifyInputPassword(inputPassword, setInputPassword)}
            />
            <PasswordField 
            placeholder='confirmar contraseña' 
            initSecure
            handlerChangeText={() => validEqualPassword(inputPassword, inputConfirPassword)}
            />
            <ButtonText
            text='Registrar'
            onPress={() => {
                if( validFieldEmpty(
                    inputCode,
                    inputConfirPassword,
                    inputEmail,
                    inputName,
                    inputPassword,
                    inputlastName) ) {
                        Alert.alert(title='Aviso', message='Ha sido registrado con éxito')
                    }}}
            />
            <Text>¿Ya tienes una cuenta? <Text>inicia sesion</Text></Text>
        </View>
        
        <View>
            <Footer></Footer>
        </View>
    </View>
    )
}

export default Register