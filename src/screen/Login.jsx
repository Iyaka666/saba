import React,{useState} from 'react'
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import Constants from 'expo-constants'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { CheckBox } from '@rneui/themed'
import Passwordfield from './../components/Passwordfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Textfield from '../components/Textfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Browser from '../components/Browser.jsx'
import theme from '../theme.js'
import {
    verifyPassword, 
    verifyCode, 
    validFieldEmpty
} from '../validationValidValues.js'
import {textfield} from '../styles/textField.js'
import { footer } from '../styles/footer.js'
import { button } from '../styles/button.js'

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
        if( 
            verifyPassword(password, setPassword) &&
            verifyCode(user, setUser) &&
            validFieldEmpty(password, user)
            )
        {
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
                <View style={style.title}>
                    <Text>Sistema de asignación y {'\n'}búsqueda de aulas</Text>
                </View>
                
                <Textfield 
                placeholder='Código'
                value={user}
                containerStyle={textfield.textfields}
                contentStyle={textfield.contentTextField}/>
                
                <Passwordfield 
                placeholder='Contraseña'
                value={password}
                initSecure
                containerStyle={textfield.textfields}
                contentStyle={textfield.contentTextField}
                />
                
                <CheckBox 
                title="Recordarme" 
                checked={rememberMe}
                checkedColor={COLOR_SECONDARY}
                center 
                containerStyle={style.checkBox}
                onPress={ dataTrial }/>
                
                <ButtonText
                text='Iniciar sesion'
                containerStyle={button.style}
                contentStyle={[button.text, style.textCenter]}
                onPress={ handlerLogin }
                />
                
                <Browser 
                text='¿No tienes una cuenta? registrate'
                destiny='interscreens'
                navigation={navigation}
                navigate='Register'
                contentStyle={[style.textCenter, style.freeText]}/>
                
                <Browser
                text='¿Olvidaste tu contraseña?'
                destiny='interscreens'
                navigation={navigation}
                navigate='ForgotPassword'
                contentStyle={[style.textRed,style.textCenter]}
                />

            </View>
            
            <View style={style.footer}>
                <Footer 
                noPqrs
                containerStyle={[style.footer, footer.style]}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        backgroundColor:theme.colors.primary,
        position: 'relative',
        height:hp(100),
        width: wp(100),
    },
    header:{
        flex:3,
        marginTop: Constants.statusBarHeight + hp(5),
        alignItems: 'center'
    },
    content:{
        flex:5
    },
    footer:{
        flex:2
    },
    title:{
        fontSize: hp(1.7),
        textAlign: 'center',
        marginTop: hp(9),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textRed:{
        color:theme.colors.secondary
    },
    checkBox:{
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: hp(-1.5),
        paddingTop: hp(0),
        paddingBottom: hp(0),
        paddingLeft: wp(2),
        paddingRight: wp(2)
    },
    textCenter:{
        textAlign:'center'
    },
    freeText:{
        marginTop: hp(1),
        marginBottom: hp(1)
    }
})

export default Login