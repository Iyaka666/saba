import React, {useState} from 'react'
import { Alert,View,Text, StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import Constants from 'expo-constants'
import TextField from '../components/Textfield.jsx'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Browser from '../components/Browser.jsx'
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
    //----------------------------  End hooks ----------------------------
    return(
    <View style={style.container}>
        <View style={style.header}>
            <Header 
            screen='noLogin'/>
        </View>

        <View style={style.form}>
            <TextField 
            placeholder='Nombres' 
            autoCapitalize='words' 
            value={inputName}
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField}
            handlerChangeText={() => verifyInputName(inputName, setInputName)}/>
            <TextField 
            placeholder='Apellidos' 
            autoCapitalize='words'
            value={inputlastName} 
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField}
            handlerChangeText={() => verifyInputLastname(inputlastName, setInputLastname)}/>
            <TextField 
            placeholder='Código de estudiante'
            value={inputCode} 
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField}
            handlerChangeText={() => verifyInputCode(inputCode, setInputCode)}/>
            <TextField 
            placeholder='correo electrónico'
            value={inputEmail}
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField} 
            handlerChangeText={() => verifyInputEmail(inputEmail, setInputEmail)}/>
            <PasswordField 
            placeholder='contraseña' 
            initSecure
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField}
            handlerChangeText={() => verifyInputPassword(inputPassword, setInputPassword)}
            />
            <PasswordField 
            placeholder='confirmar contraseña' 
            initSecure
            containerStyle={textfield.textfields}
            contentStyle={textfield.contentTextField}
            handlerChangeText={() => validEqualPassword(inputPassword, inputConfirPassword)}
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
        flex: 1,
        marginTop: Constants.statusBarHeight + hp(5),
        alignItems: 'center'
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