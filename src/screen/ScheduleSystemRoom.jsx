import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/HeaderWithUser.jsx'
import Footer from '../components/Footer.jsx'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const ScheduleSystemRoom = () => {
    //----------------------------  Hooks ----------------------------
    const [isVisible, setIsVisible] = useState(false);
    //----------------------------  End hooks ------------------------
    const fixedText = "Este es un texto fijo\ncon saltos de línea\nque se muestra en el área de texto.";


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text>Solisitar Sala de Sistemas</Text>
                <View style={{ flex: 1, width: '100%' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={style.inputTitle}>
                            <Text>Mes</Text>
                        </View>
                        <View style={style.inputTitle}>
                            <Text>Día</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={style.inputTitle}>Horario</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        {isVisible && (
                            <TextInput
                                style={style.textArea}
                                editable={false}
                                multiline={true}>
                                <Text style={{ color: 'black' }}>{fixedText}</Text>
                            </TextInput>)}
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable style={style.button}>
                            <Text style={[style.textButton, style.textCenter]}>Enviar</Text>
                        </Pressable>
                    </View>
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
    textRed: {
        color: theme.colors.secondary
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
    textButton: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    textCenter: {
        textAlign: 'center'
    },
})

export default ScheduleSystemRoom