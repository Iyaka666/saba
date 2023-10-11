import React, {useState} from 'react'
import {SafeAreaView, View, StyleSheet} from 'react-native'

export const UserNameField = (placeholder) => {
    const [userName, setUserName] = useState('')
    return (
    <SafeAreaView>
        <View>
        <TextInput
            value={userName}
            onChangeText={(userName => useState(userName))}
            placeholder={placeholder}
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