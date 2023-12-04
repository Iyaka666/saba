import React from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from './../components/HeaderWithUser.jsx'
import Footer from './../components/Footer.jsx'
import theme from './../theme.js'

const { height, width } = Dimensions.get('window')

const CancelClass = () => {
    //----------------------------  Hooks ----------------------------
    //----------------------------  End hooks ------------------------


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text>Cancelar Clase</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text>Asignatura</Text>
                        <Textfield
                            placeholder='Asignatura'
                        ></Textfield>
                    </View>
                    <View>
                        <Text>Salon</Text>
                        <Textfield
                            placeholder='Salon'
                        ></Textfield>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text>Hora Inicio</Text>
                    </View>
                    <View>
                        <Text>Hora Fin</Text>
                    </View>
                </View>
                <View>

                </View>
                <Pressable style={style.button}></Pressable>
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
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        width: 225,
        borderRadius: 20,
        overflow: 'hidden'
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
    textButton: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    textCenter: {
        textAlign: 'center'
    },
})

export default CancelClass