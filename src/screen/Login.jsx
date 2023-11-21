import React,{useState, useEffect} from 'react'
import {
    AsyncStorage,
    Dimensions,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
/*
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen' */
import { CheckBox } from '@rneui/themed'
import Passwordfield from './../components/Passwordfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Textfield from '../components/Textfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import theme from '../theme.js'
import {verifyInputUser, verifyInputPassword} from '../validationValidValues.js'
//import { logFile } from './../logs.js'
import * as Keychain from 'react-native-keychain'


const {height, width} = Dimensions.get('window')

const COLOR_SECONDARY = theme.colors.secondary

const Login = () => {
    //----------------------------  Hooks ----------------------------
    const [inputUser, setInputUser] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    useEffect(() => {
        handlerLoadCredentialsStoraged();
    },[])
    //----------------------------  End hooks ----------------------------
    //---------------------------- Handlers ------------------------------
    const handlerRememberMe = () => {
        setRememberMe(!rememberMe)
    }
    const handlerLoadCredentialsStoraged = async () => {
        try {
            const credentials = await AsyncStorage.getItem('credentials')
            if (credentials){
                const {userName, password} = JSON.parse(credentials)
                setInputUser(userName)
                setInputPassword(password)
                setRememberMe(true)
            } 
        } catch (error) {
            console.error(error)
        }
    }

    const saveCredentials = async () => {
        try {            
            if (rememberMe){
                const credentials = JSON.stringify({userName,password})
                await AsyncStorage.setItem('credentials', credentials)
                await Keychain.setGenericPassword(userName, password)
            }else{
                return
            }
        } catch (error) {
            console.error(error)
        }
    }
    //---------------------------- End handlers ------------------------------

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header/>
            </View>

            <View style={style.content}>

                <Text style={style.text}>Sistema de asignaci&oacute;n y b&uacute;squeda de{'\n'}aulas</Text>
                
                <Textfield 
                placeholder='Usuario'
                handlerChangeText={() => verifyInputUser(inputUser, setInputUser)}
                value={inputUser}
                ></Textfield>
                
                <Passwordfield 
                placeholder='Contrase&ntilde;a'
                value={inputPassword}
                initSecure/>
                
                <CheckBox 
                title="Recordarme" 
                checked={rememberMe}
                checkedColor={COLOR_SECONDARY}
                center 
                containerStyle={style.checkBox}
                onPress={handlerRememberMe}/>
                
                <ButtonText
                text='Iniciar sesion'
                containerStyle={style.button}
                contentStyle={[style.textButton, style.textCenter]}
                onPress={() => [verifyInputPassword(inputPassword, setInputPassword), saveCredentials()]}
                />

                <Text style={[style.textCenter, style.freeText]}
                >¿No tienes una cuenta?  <Text
                style={[style.textRed, style.freeText]}>registrate</Text> </Text>
                
                <Text 
                style={[style.textRed,style.textCenter]}>¿Olvidaste tu contrase&ntilde;a?</Text>
            </View>
            
            <View style={style.footer}>
                <Footer 
                noPqrs/>
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
        color: theme.colors.secondary,
        marginLeft:'auto',
        marginRight:'auto'
    },
    button:{
        borderRadius:20,
        backgroundColor:theme.colors.secondary,
        justifyContent:'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        marginLeft: 'auto',
        marginRight: 'auto'
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