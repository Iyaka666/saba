import React from 'react'
import {View, Text, Pressable} from 'react-native'
import TextField from './generals/Textfield.jsx'
import PasswordField from './generals/Passwordfield.jsx'

const Register = () => {
    return(
    <View>
        <View>
            <Header></Header>
        </View>
        <View>
            <TextField placeholder='Nombres' autoCapitalize='words'/>
            <TextField placeholder='Apellidos' autoCapitalize='words'/>
            <TextField placeholder='Código de estudiante'/>
            <TextField placeholder='correo electrónico'/>
            <PasswordField placeholder='contraseña' initSecure/>
            <PasswordField placeholder='confirmar contraseña' initSecure/>
            <Pressable>
                <Text>Registrar</Text>
            </Pressable>
            <Text>¿Ya tienes una cuenta? <Text>inicia sesion</Text></Text>
        </View>
        <View>
            <Footer></Footer>
        </View>
    </View>
    )
}

export default Register

