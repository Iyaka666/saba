import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PasswordField from '../components/Passwordfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'

const ResetPassword = ({navigation}) => {
    const conditionsPassword = 'Mínimo 8 cáracteres, un número, un caracter especial'
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header
                screen='logout'
                />
            </View>

            <View style={style.content}>
            <Text>Ingrese una nueva contraseña</Text>
            <PasswordField
            initSecure
            placeholder = {conditionsPassword}
            contentStyle={[textfield.content, textfield.style]}
            />
            <Text>Confirma contraseña</Text>
            <PasswordField
            initSecure
            placeholder = {conditionsPassword}
            contentStyle={[textfield.content, textfield.style]}
            />
            <ButtonText
            text='Enviar'
            containerStyle={button.style}
            contentStyle={button.text}
            />
            </View>

            <View style={style.footer}>
                <Footer/>
            </View>
        </View>
    )
}

export default ResetPassword

const style = StyleSheet.create({
    container:{
        height: hp(100),
        width: wp(100)
    },
    header:{
        flex:3
    },
    content:{
        flex:6
    },
    footer:{
        flex:1
    }
})
