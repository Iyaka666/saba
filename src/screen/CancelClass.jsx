import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/HeaderWithUser.jsx'
import Footer from '../components/Footer.jsx'
import TextField from '../components/Textfield.jsx'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const CancelClass = () => {
    //----------------------------  Hooks ----------------------------
    const [SalonText, SetSalonText] = useState('')
    const [AsignaturaText, SetAsignaturaText] = useState('')
    //----------------------------  End hooks ------------------------


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text style={{flex: 1}}>Cancelar Clase</Text>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                    <View>
                        <Text style={style.inputTitle}>Asignatura</Text>
                        <TextField
                            placeholder='Asignatura'
                            value={AsignaturaText}
                        />
                    </View>
                    <View>
                        <Text style={style.inputTitle}>Salon</Text>
                        <TextField
                            placeholder='Salón'
                            value={SalonText}
                        />
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                    <View>
                        <Text>Hora Inicio</Text>
                    </View>
                    <View>
                        <Text>Hora Fin</Text>
                    </View>
                </View>
                <View style={style.areaContainer}>
                    <TextInput
                        style={style.textArea}
                        multiline={true} />
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Pressable style={style.button}>
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
        justifyContent: 'space-evenly'
    },
    areaContainer: {
        flex: 8,
        width: '100%',
    },
    textRed: {
        color: theme.colors.secondary
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
    inputTitle: {
        marginLeft: theme.margins.fieldsL,
        marginRight: theme.margins.fieldsR,
    },
    button: {
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
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

export default CancelClass