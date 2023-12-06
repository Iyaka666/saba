import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dia } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import constants from 'expo-constants'
import Header from '../components/Header.jsx'
import { footer } from '../styles/footer.js'
import Footer from '../components/Footer.jsx'
import TextField from '../components/Textfield.jsx'
import { Dialog } from '@rneui/themed'
import theme from '../theme.js'

const ScheduleSystemRoom = ({ navigation }) => {
    //----------------------------  Hooks ----------------------------
    const [isVisible, setIsVisible] = useState(false);
    const [visibleDialog, setVisibleDialog] = useState(false)
    const [mes, setMes] = useState(new Date())
    const [dia, setDia] = useState(new Date())
    const [inicio, setInicio] = useState(new Date())
    const [fin, setFin] = useState(new Date())
    //----------------------------  End hooks ------------------------
    const toggleDialog = () => setVisibleDialog(!visibleDialog)
    const fixedText = "Su solicitud ha sido enviada\n\nEspere atentamente el correo de\nrespuesta de la asignación.";
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
                <Text>Solisitar Sala de Sistemas</Text>
                <View style={{ flex: 1, width: wp(80) }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text>Mes</Text>
                            <TextField
                                placeholder='Mes'
                                value={mes}
                                contentStyle={style.inputWidth}
                            />
                        </View>
                        <View>
                            <Text>Día</Text>
                            <TextField
                                placeholder='Dia'
                                value={dia}
                                contentStyle={style.inputWidth}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                    <View style={{ flex: 2 }}>
                        {isVisible && (
                            <TextInput
                                style={style.textArea}
                                editable={false}
                                multiline={true}>
                                <Text style={{ color: 'black' }}>{fixedText}</Text>
                            </TextInput>)}
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{
                        !isVisible ?
                            <Pressable style={style.button}
                                onPress={toggleDialog}>
                                <Text style={[style.textButton, style.textCenter]}>Enviar</Text>
                            </Pressable> :
                            <Pressable style={style.button}
                                onPress={handlerRegreso}>
                                <Text style={[style.textButton, style.textCenter]}>Regresar</Text>
                            </Pressable>}
                    </View>
                </View>

                <Dialog
                    isVisible={visibleDialog}
                    onBackdropPress={toggleDialog}
                    style={style.dialog}
                >
                    <View>
                        <Text style={style.textCenter}>Su solicitud ha sido enviada{'\n'}satisfactoriamente</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            toggleDialog();
                            setIsVisible(true);
                        }}
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
        height: hp(100),
        width: wp(100),
    },
    header: {
        flex: 1,
        marginTop: constants.statusBarHeight,
        marginLeft: 10,
        marginRight: 20
    },
    content: {
        flex: 6,
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
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
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
    },
    dialog: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'red',
        height: 200
    }
})

export default ScheduleSystemRoom