import React, {useState} from 'react'
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'

export const LoginTextBox = () => {
    const [userName, setUserName] = useState('')
    return (
    <SafeAreaView>
        <View>
        <Text>Iniciar Sesion</Text>
        <TextInput
            value={userName}
            onChangeText={(userName => useState(userName))}
            placeholder={'Ingrese nombre de usuario'}
            style={style.input}
        />
        </View>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    input:{
        width:250,
        height:44,
        padding:10,
        marginTop:20,
        marginBotton:10,
        backgroundColor:'#e8e8e8'
    }
})