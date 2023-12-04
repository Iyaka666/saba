import React from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from '../components/HeaderWithUser.jsx'
import Footer from '../components/Footer.jsx'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const ReportProblems = () => {
    //----------------------------  Hooks ----------------------------
    //----------------------------  End hooks ------------------------


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text>Notificar Problemas En El Salón</Text>
                <View >
                    <Text>Salón</Text>
                    <Textfield
                        placeholder='Salon'
                    ></Textfield>
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

export default ReportProblems