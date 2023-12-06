import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { footer } from '../styles/footer.js'
import { Dialog } from '@rneui/themed'
import theme from '../theme.js'
import TextField from '../components/Textfield.jsx'

const { height, width } = Dimensions.get('window')

const ReportProblems = ({ navigation }) => {
    //----------------------------  Hooks ----------------------------
    const [visibleDialog, setVisibleDialog] = useState(false)
    const [AreaText, SetAreaText] = useState('')
    const [SalonText, SetSalonText] = useState('')
    //----------------------------  End hooks ------------------------
    const toggleDialog = () => setVisibleDialog(!visibleDialog)
    const handlerRegreso = () => {
        navigation.navigate('ProfessorAgenda')
    }


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header
                    screen={'logedIn'}
                    navigation={navigation}
                />
            </View>

            <View style={style.content}>
                <Text>Notificar Problemas En El Salón</Text>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start', width: '80%' }}>
                    <Text>Salón:</Text>
                    <TextField
                        placeholder='Salón'
                        value={SalonText}
                        contentStyle={style.inputWidth}
                    />
                </View>
                <View style={style.areaContainer}>
                    <TextInput
                        style={style.textArea}
                        value={AreaText}
                        multiline={true} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable style={style.button}
                        onPress={toggleDialog}>
                        <Text style={[style.textButton, style.textCenter]}>Enviar</Text>
                    </Pressable>
                </View>

                <Dialog
                    onBackdropPress={toggleDialog}
                    style={style.dialog}
                >
                    <View>
                        <Text style={style.textCenter}>La notoficación ha sido enviada{'\n'}satisfactoriamente</Text>
                    </View>
                    <Pressable
                        onPress={handlerRegreso}
                    >
                        <Text>Aceptar</Text>
                    </Pressable>
                </Dialog>
            </View>

            <View style={style.footer}>
                <Footer
                    noPqrs
                    containerStyle={[style.footer, footer.style]} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
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
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    areaContainer: {
        flex: 6,
        width: '80%',
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
    footer: {
        flex: 1
    },
    inputWidth: {
        width: 100
    }
})

export default ReportProblems