import React from 'react'
import {View} from 'react-native'
import TextField from './generals/Textfield.jsx'
import PasswordField from './generals/Passwordfield.jsx'

const Register = () => {
    return(
        <View>
            <View>
                <Header></Header>
            </View>
            <View>
                <TextField/>
                <TextField/>
                <TextField/>
                <TextField/>
                <PasswordField/>
                <PasswordField/>
            </View>
            <View>
                <Footer></Footer>
            </View>
        </View>
    )
}

export default Register

