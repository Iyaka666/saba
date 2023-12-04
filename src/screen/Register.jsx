/*Aquí se crea la screen Register
Estructura básica 
    - Logo Mediano 
    - Titulo
    - Campo de texto para nombres
    - Campo de texto para apellidos
    - Campo de texto para codigo
    - Campo de texto para correo electrónico
    - Campo de texto para contraseña
    - Campo de texto para confirmación de contraseña
    - Boton Registar
    - Enlace a screen Login
    - Información acerca de nosotros

Entrada:
    navigation: objeto navigation que permite las diferentes navegaciones establecidas
Salida: Screen
*/

//--------------- importacion de frameworks ----------
import React, {useState} from 'react'
import { 
    Alert,
    View,
    StyleSheet
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
//--------------- importacion de frameworks fin ----------

//--------------- importacion Componentes ----------
import TextField from '../components/Textfield.jsx'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Browser from '../components/Browser.jsx'
//--------------- importacion Componentes fin ----------

//--------------- otras importaciones ----------
import {
    verifyInputName, 
    verifyInputLastname, 
    verifyInputCode,
    verifyInputEmail,
    verifyInputPassword,
    validEqualPassword,
    validFieldEmpty
} from './../validationValidValues.js'
import {textfield} from './../styles/textField.js'
import { footer } from '../styles/footer.js'
import { button } from '../styles/button.js'

const Register = ({navigation}) => {
    //----------------------------  Hooks ----------------------------
    const {inputName, setInputName} = useState()
    const {inputlastName, setInputLastname} = useState()
    const {inputCode, setInputCode} = useState()
    const {inputEmail, setInputEmail} = useState()
    const {inputPassword, setInputPassword} = useState()
    const {inputConfirPassword, setInputConfirPassword} = useState()
    //----------------------------  Hooks fin----------------------------
    return(
    <View style={style.container}>
        <View style={style.header}>
            <Header 
            screen='logout'
            navigation={navigation}/>
        </View>

        <View style={style.content}>
            <TextField 
            placeholder='Nombres' 
            autoCapitalize='words' 
            value={inputName}
            containerStyle={textfield.style}
            contentStyle={textfield.content}
            onChangeText={() => verifyInputName(inputName, setInputName)}/>
            <TextField 
            placeholder='Apellidos' 
            autoCapitalize='words'
            value={inputlastName} 
            containerStyle={textfield.style}
            contentStyle={textfield.content}
            onChangeText={() => verifyInputLastname(inputlastName, setInputLastname)}/>
            <TextField 
            placeholder='Código de estudiante'
            value={inputCode} 
            containerStyle={textfield.style}
            contentStyle={textfield.content}
            onChangeText={() => verifyInputCode(inputCode, setInputCode)}/>
            <TextField 
            placeholder='correo electrónico'
            value={inputEmail}
            containerStyle={textfield.style}
            contentStyle={textfield.content} 
            onChangeText={() => verifyInputEmail(inputEmail, setInputEmail)}/>
            <PasswordField 
            placeholder='contraseña' 
            initSecure
            containerStyle={textfield.style}
            contentStyle={textfield.content}
            onChangeText={() => verifyInputPassword(inputPassword, setInputPassword)}
            />
            <PasswordField 
            placeholder='confirmar contraseña' 
            initSecure
            containerStyle={textfield.style}
            contentStyle={textfield.content}
            onChangeText={() => validEqualPassword(inputPassword, inputConfirPassword)}
            />
            <ButtonText
            text='Registrar'
            containerStyle={button.style}
            contentStyle={[button.text, style.textCenter]}
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
            <Browser
            text='¿Ya tienes una cuenta? inicia sesión'
            destiny='interscreens'
            navigation={navigation}
            navigate='Login'
            contentStyle={[style.textCenter,style.freeText]}
            />
        </View>
        
        <View style={style.footer}>
            <Footer
            containerStyle={footer.style}/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        height: hp(100),
        witdth: wp(100),
        gap: hp(5)
    },
    header:{
        flex: 1
    },
    content:{
        flex:7
    },
    footer:{
        flex:2
    },
    textCenter:{
        textAlign:'center'
    },
    freeText:{
        marginTop:hp(1),
        marginBottom:hp(1)
    }

})

export default Register