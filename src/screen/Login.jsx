import React,{useState} from 'react'
import {
    Dimensions,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import Constants from 'expo-constants'
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
import Browser from '../components/Browser.jsx'
import theme from '../theme.js'
import {verifyPassword, verifyCode, validFieldEmpty} from '../validationValidValues.js'

const {height, width} = Dimensions.get('window')

const COLOR_SECONDARY = theme.colors.secondary

const Login = ({navigation}) => {
    const userTrial  = {
        name:'Diego',
        lastname:'Cardenas',
        code:'1234567-1234',
        email:'diego@correounivalle.edu.co',
        password:'12345678A!'
    }
    //----------------------------  Hooks ----------------------------
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    // useEffect(() => {
    //     handlerLoadCredentialsStoraged();
    // },[])
    
    //----------------------------  End hooks ----------------------------
    //---------------------------- Handlers ------------------------------
    // const handlerRememberMe = () => {
    //     setRememberMe(!rememberMe)
    // }
    // const handlerLoadCredentialsStoraged = async () => {
    //     try {
    //         const credentials = await AsyncStorage.getItem('credentials')
    //         if (credentials){
    //             const {userName, password} = JSON.parse(credentials)
    //             setUser(userName)
    //             setPassword(password)
    //             setRememberMe(true)
    //         } 
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const saveCredentials = async () => {
    //     try {            
    //         if (rememberMe){
    //             const credentials = JSON.stringify({userName,password})
    //             await AsyncStorage.setItem('credentials', credentials)
    //             await Keychain.setGenericPassword(userName, password)
    //         }else{
    //             return
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    //---------------------------- End handlers ------------------------------
    const dataTrial = function (){
        setRememberMe((prevRememberMe) => {
            const newRememberMe = !prevRememberMe;
            setUser(newRememberMe ? userTrial.code : '');
            setPassword(newRememberMe ? userTrial.password : '');
            return newRememberMe;
        });
    }

    const handlerLogin = () => {
        if( verifyPassword(password, setPassword) &&
            validFieldEmpty(password, user)){
                navigation.navigate('Home')
        }
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header 
                screen='login' 
                logoWitdh={240*1.4} 
                logoHeight={200*1.4}/>
            </View>

            <View style={style.content}>

                <Text style={style.title}>Sistema de asignación y {'\n'}búsqueda de aulas</Text>
                
                <Textfield 
                placeholder='Código'
                value={user}
                ></Textfield>
                
                <Passwordfield 
                placeholder='Contraseña'
                value={password}
                initSecure/>
                
                <CheckBox 
                title="Recordarme" 
                checked={rememberMe}
                checkedColor={COLOR_SECONDARY}
                center 
                containerStyle={style.checkBox}
                onPress={ dataTrial }/>
                
                <ButtonText
                text='Iniciar sesion'
                containerStyle={style.button}
                contentStyle={[style.textButton, style.textCenter]}
                onPress={ handlerLogin }
                />

                <Text style={[style.textCenter, style.freeText]}
                >¿No tienes una cuenta?  
                <Browser 
                destiny='interscreens'
                navigation={navigation}
                navigate='Register'
                contentStyle={[style.freeText, style.center]}> registrate </Browser></Text>
                
                <Text 
                style={[style.textRed,style.textCenter]}>¿Olvidaste tu contraseña?</Text>
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
        flex:3,
        marginTop: Constants.statusBarHeight + 10,
        alignItems: 'center'
    },
    content:{
        flex:5
    },
    footer:{
        flex:2,
        position:'absolute',
        bottom:0,
        left:-10,
        right:0
    },
    title:{
        fontSize: 14,
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