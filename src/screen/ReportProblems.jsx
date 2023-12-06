import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/HeaderWithUser.jsx'
import Footer from '../components/Footer.jsx'
import theme from '../theme.js'
import TextField from '../components/Textfield.jsx'

const { height, width } = Dimensions.get('window')

const ReportProblems = () => {
    //----------------------------  Hooks ----------------------------
    const [AreaText, SetAreaText] = useState('')
    const [SalonText, SetSalonText] = useState(0)
    //----------------------------  End hooks ------------------------


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text>Notificar Problemas En El Salón</Text>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={style.inputTitle}>Salón:</Text>
                    <TextField
                        placeholder='Salón'
                        value={SalonText}
                    />
                </View>
                <View style={style.areaContainer}>
                    <TextInput
                        style={style.textArea}
                        value={AreaText}
                        multiline={true}/>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable
                        style={style.button}>
                        <Text style={[style.textButton, style.textCenter]}>Enviar</Text>
                    </Pressable>
                </View>
            </View>

            <View>
                <Footer noPqrs></Footer>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flex: 1,
        height: height,
        width: width,
    },
    header: {
        flex: 1,
        marginTop: constants.statusBarHeight,
        marginLeft: 10,
        marginRight: 20
    },
    content: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textArea: {
        flex: 1,
        marginLeft: theme.margins.fieldsL,
        marginRight: theme.margins.fieldsR,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    areaContainer: {
        flex: 6,
        width: '100%',
    },
    inputTitle: {
        marginLeft: theme.margins.fieldsL,
        marginRight: theme.margins.fieldsR,
    },
    button: {
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        width: 100
    },
    textButton: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    textCenter: {
        textAlign: 'center'
    },
})

export default ReportProblems