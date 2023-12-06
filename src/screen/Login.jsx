/*Aquí se crea la screen Login
Estructura básica 
    - Logo
    - Titulo
    - Campo de texto para Codigo
    - Campo de texto para contraseña
    - Checkbox de recordarme
    - Boton iniciar sesion
    - Enlace a screen Register
    - Enlace a screen ForgotPassword
    - Información acerca de nosotros

Entrada:
    navigation: objeto navigation que permite las diferentes navegaciones establecidas
Salida: Screen
*/
//--------------- importacion de frameworks ----------
import React,{useState} from 'react'
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
//--------------- importacion de frameworks fin ----------

//--------------- importacion componentes externos ----------
import { CheckBox } from '@rneui/themed'
//--------------- importacion componentes externos fin ----------

//--------------- importacion Componentes ----------
import Passwordfield from './../components/Passwordfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Textfield from '../components/Textfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Browser from '../components/Browser.jsx'
//--------------- importacion Componentes ----------

//--------------- otras importaciones ----------
import {
    verifyPassword, 
    verifyCode, 
    validFieldEmpty
} from '../validationValidValues.js'
import {textfield} from '../styles/textField.js'
import { footer } from '../styles/footer.js'
import { button } from '../styles/button.js'
import theme from '../theme.js'
//--------------- otras importaciones ----------

const COLOR_SECONDARY = theme.colors.secondary

const Login = ({navigation}) => {
// Información de prueba utilizada por el recordar me de la screen
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
    //----------------------------  Hooks fin ----------------------------

    /*dataTrial Creada para manejar los datos de prueba
    Entradas:
        code: el código preestablecido para que el usuario inicie sesion
        password: la clave correspondiente al usuario
    Salida: Modificación del estado rememberMe
    */
    const WP_LOGO_LOGIN = 40

    const dataTrial = function (code, password){
        setRememberMe((prevRememberMe) => {
            const newRememberMe = !prevRememberMe;
            setUser(newRememberMe ? userTrial.code : '');
            setPassword(newRememberMe ? userTrial.password : '');
            return newRememberMe;
        });
    }

    //Manejador que controla la validación de valores válidos
    const handlerLogin = () => {
        if( verifyPassword(password, setPassword) &&
            verifyCode(user, setUser) &&
            validFieldEmpty(password, user) )
        {
            navigation.navigate('Home')
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header 
                screen='login' 
                logoWitdh={wp(WP_LOGO_LOGIN)} 
                logoHeight={hp(WP_LOGO_LOGIN*1.2)}/>
            </View>

            <View style={style.content}>
                <View style={style.title}>
                    <Text>Sistema de asignación y {'\n'}búsqueda de aulas</Text>
                </View>
                
                <Textfield 
                placeholder='Código'
                value={user}
                onChangeText={(text) => setUser(text)}
                containerStyle={textfield.style}
                contentStyle={textfield.content}/>
                
                <Passwordfield 
                placeholder='Contraseña'
                value={password}
                onChangeText={ (text) => setPassword(text) }
                initSecure
                containerStyle={textfield.style}
                contentStyle={textfield.content}
                />
                
                <CheckBox 
                title="Recordarme" 
                checked={rememberMe}
                checkedColor={COLOR_SECONDARY}
                center 
                containerStyle={style.checkBox}
                onPress={ () => dataTrial(user, password)} />
                
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
        flex:4        
    },
    content:{
        flex:5,
        paddingBottom: hp(12)
    },
    footer:{
        flex:1
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