import React,{useState} from 'react'
import {View, Text, Pressable, StyleSheet, Dimensions, Alert} from 'react-native'
import { CheckBox } from '@rneui/themed'
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Passwordfield from './generals/Passwordfield.jsx'
import Header from './generals/Header.jsx'
import Footer from './generals/Footer.jsx'
import Textfield from './generals/Textfield.jsx'
import theme from './../../theme.js'
import { isNumberAndOthers, isPasswordValid } from '../../regex.js'

const {height, width} = Dimensions.get('window')

const COLOR_SECONDARY = theme.colors.secondary

const Login = () => {
    //----------------------------  Hooks ----------------------------
    const [inputUser, setInputUser] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    //----------------------------  End hooks ----------------------------
    //---------------------------  Functions  ----------------------------
    const verifyInputUser = (text) => {
        setInputUser(text)
        if(!isNumberAndOthers.test(text)) {
            Alert.alert(
                title='Usuario invalido', 
                message='El usuario solo acepta números y "-" ejemplo: 12345678-9'
                )
            setInputUser('')
        }
    }

    const verifyInputPassword = (text) => {
        setInputPassword(text)
        if(!isPasswordValid.test(text)) {
            Alert.alert(
                title='Contraseña Invalida',
                message='Debe contener mínimo 8 letras, tener un número y tener un caracter especial'
                )
            setInputPassword('')
        }
    }
    //---------------------------  End functions  ----------------------------
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text style={style.text}>Sistema de asignaci&oacute;n y b&uacute;squeda de{'\n'}aulas</Text>
                <Textfield 
                placeholder='Usuario'
                handlerChangeText={verifyInputUser}
                value={inputUser}
                ></Textfield>
                <Passwordfield 
                placeholder='Contrase&ntilde;a'
                value={inputPassword}
                initSecure/>
                <CheckBox 
                title="Recordarme" 
                checkedColor={COLOR_SECONDARY}
                center 
                containerStyle={style.checkBox}/>
                <Pressable 
                style={style.button}
                onPress={verifyInputPassword}
                >
                    <Text 
                    style={[style.textButton, style.textCenter]}
                    >Iniciar sesion</Text>
                </Pressable>
                <Text style={[style.textCenter, style.freeText]}
                >¿No tienes una cuenta?  <Text
                style={[style.textRed, style.freeText]}>registrate</Text> </Text>
                <Text 
                style={[style.textRed,style.textCenter]}>¿Olvidaste tu contrase&ntilde;a?</Text>
            </View>
            
            <View style={style.footer}>
                <Footer></Footer>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        backgroundColor:theme.colors.primary,
        position: 'relative',
        height:height,
        width: width,
    },
    header:{
        flex:1
    },
    content:{
        flex:7,

    },
    footer:{
        flex:2,
        position:'absolute',
        bottom:0,
        left:-10,
        right:0
    },
    text:{
        fontSize: 36,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    },
    textRed:{
        color:theme.colors.secondary
    },
    checkBox:{
        backgroundColor:theme.colors.primary,
        color: theme.colors.secondary
    },
    button:{
        borderRadius:20,
        backgroundColor:theme.colors.secondary,
        justifyContent:'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        marginLeft: 100,
        marginRight: 100
    },
    textButton:{
        color:theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    textCenter:{
        textAlign:'center'
    },
    freeText:{
        marginTop: 25,
        marginBottom: 15
    }
})

export default Login