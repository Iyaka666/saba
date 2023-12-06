import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import TextField from './../components/Textfield.jsx'
import ButtonText from './../components/ButtonText.jsx'
import Browser from '../components/Browser.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import DialogMessage from '../components/DialogMessage.jsx'
import { textfield } from '../styles/textField.js'
import { button } from '../styles/button.js'
import { footer } from '../styles/footer.js'
import { verifyEmail } from '../validationValidValues.js'
import dialog from '../styles/dialog.js'
const ForgotPassword = ({navigation}) => {
    
    const [email, setEmail] = useState('')
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handlerSend = () => {
        const info = verifyEmail(email, setEmail)
        if(info.validation) { 
            navigation.navigate('Verification',{email})
        } else{
            setVisible(true)
            setTitle(info.title)
            setMessage(info.message)
        } 
        } 
        
        return(
            <View style={style.container}>
            <View style={style.header}>
            <Header
            screen='logout'
            />
            </View>

        <View style={[style.content, style.placeholder]}>
            <View>
                <Text style={style.text}>Ingresa tu dirección de correo electrónico</Text>
            </View>
                <TextField
                value={email}
                placeholder='user@example.com'
                containerStyle={[textfield.style, style.elements]}
                contentStyle={textfield.content}
                keyboardType='email-address'
                onChangeText={text => setEmail(text)}
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
                onPress={handlerSend}
                />
        </View>
        <DialogMessage
        title={title}
        message={message}
        isVisible={visible}
        overlayStyle={[dialog.content, dialog.container]}
        onBackdropPress={setVisible}
        />
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
        flex:2
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
        fontSize:hp(2.3),
        textAlign: 'center'
    },
    placeholder:{
        marginRight: wp(10),
        marginLeft: wp(10)
    }
})

export default ForgotPassword