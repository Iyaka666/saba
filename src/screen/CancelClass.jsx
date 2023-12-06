import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { footer } from '../styles/footer.js'
import TextField from '../components/Textfield.jsx'
import { Dialog } from '@rneui/themed'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const CancelClass = ({ navigation }) => {
    //----------------------------  Hooks ----------------------------
    const [visibleDialog, setVisibleDialog] = useState(false)
    const [SalonText, SetSalonText] = useState('')
    const [AsignaturaText, SetAsignaturaText] = useState('')
    const [inicio, setInicio] = useState(new Date())
    const [fin, setFin] = useState(new Date())
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
                <Text style={{ flex: 1 }}>Cancelar Clase</Text>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "80%" }}>
                    <View>
                        <Text>Asignatura</Text>
                        <TextField
                            placeholder='Asignatura'
                            value={AsignaturaText}
                            contentStyle={style.inputWidth}
                        />
                    </View>
                    <View>
                        <Text>Salon</Text>
                        <TextField
                            placeholder='Salón'
                            value={SalonText}
                            contentStyle={style.inputWidth}
                        />
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                    <View>
                        <Text>Hora Inicio</Text>
                        <TextField
                            placeholder='Inicio'
                            value={inicio}
                            contentStyle={style.inputWidth}
                        />
                    </View>
                    <View>
                        <Text>Hora Fin</Text>
                        <TextField
                            placeholder='Fin'
                            value={fin}
                            contentStyle={style.inputWidth}
                        />
                    </View>
                </View>
                <View style={style.areaContainer}>
                    <TextInput
                        style={style.textArea}
                        multiline={true} />
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
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
                        <Text style={style.textCenter}>La clase ha sido cancelada{'\n'}satisfactoriamente</Text>
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
        justifyContent: 'space-evenly'
    },
    areaContainer: {
        flex: 8,
        width: '80%',
    },
    textRed: {
        color: theme.colors.secondary
    },
    textArea: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
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
    footer: {
        flex: 1
    },
    inputWidth: {
        width: 100
    }
})

export default CancelClass