import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import TextField from './../components/Textfield.jsx'
import ButtonText from './../components/ButtonText.jsx'
import Browser from '../components/Browser.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'
import { footer } from '../styles/footer.js'

const ForgotPassword = ({navigation}) => {
    return(
        <View style={style.container}>
            <View style={style.header}>
            <Header
            screen='logout'
            />
            </View>

        <View style={style.content}>
            
            <Text style={style.text}>Ingresa tu dirección de correo electrónico</Text>

            <TextField
            placeholder='example@gmail.com'
            containerStyle={[textfield.style, style.elements]}
            contentStyle={textfield.content}
            />
            <Browser
            text='Volver a inicio de sesión'
            destiny='interscreens'
            navigation={navigation}
            navigate='Login'
            contentStyle={style.text}
            />
            <ButtonText
            text='Enviar'
            containerStyle={[button.style, style.elements]}
            contentStyle={button.text}
            />
        </View>

        <View style={style.footer}>
            <Footer        
            containerStyle={[style.footer, footer.style]}/>
        </View>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        height: hp(100),
        width: wp(100)
    },
    header:{
        flex:2,
        alignItems: 'center',
        marginTop: Constants.statusBarHeight + hp(5)
    },
    content:{
        flex:7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer:{
        flex:1
    },
    elements:{
        marginTop: hp(5),
        marginBottom: hp(5)
    },
    text:{
        fontSize:hp(2.3)
    }
})

export default ForgotPassword