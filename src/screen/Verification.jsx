import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Browser from '../components/Browser.jsx'
import TextField from '../components/Textfield.jsx'
import {verifyResetPassword} from './../validationValidValues.js'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'
import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const Verification = ({navigation}) => {
    return (
    <View style={style.container}>
        <View style={style.header}>
            <Header
            screen='logout'
            />
        </View>

        <View style={style.content}>
        <View>
            <Text style={style.text}>Ingresa tu número de Verificación</Text>
        </View>
        <View style={style.groupTextFields}>
            <TextField style={[textfield.content,]}/>
            <TextField style={[textfield.content,]}/>
            <TextField style={[textfield.content,]}/>
            <TextField style={[textfield.content,]}/>
        </View>
        <Browser
        destiny='interscreen'
        text='¿sí no has recibido un código? Reenvia'
        contentStyle={style.text}
        />
        <ButtonText 
        text='Enviar'
        containerStyle={button.style}
        contentStyle={button.text}
        onPress={() => navigation.navigate('ResetPassword')}
        />
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
        height: hp(100),
        width: wp(100)
    },
    header:{
        flex: 3
    },
    content:{
        flex: 6,
        paddingTop: hp(15),
        gap: hp(6)
    },
    footer:{
        flex: 1,
        backgroundColor: "#5e4f"
    },
    groupTextFields:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: wp(5)
    },
    text:{
        fontSize: hp(2.5),
        textAlign: 'center'
    }
})

export default Verification