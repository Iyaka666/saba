import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Header from './../components/Header.jsx'
import Footer from './../components/Footer.jsx'
import Mapa from './../../assets/svgMapa.svg'
import PortaPapeles from './../../assets/svgPortaPapeles.svg'
import theme from './../theme.js'

const { height, width } = Dimensions.get('window')

const COLOR_SECONDARY = theme.colors.secondary

const Home = () => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <Text style={style.text}>Sistema de asignaci&oacute;n y b&uacute;squeda de{'\n'}aulas</Text>
                <View style={style.imageContainer}>
                    <View style={style.image}>
                        <Mapa width={750} height={100} />
                        <TouchableOpacity style={style.button}>
                            <Text
                                style={[style.textButton, style.textCenter]}
                            >Mapa</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.image}>
                        <PortaPapeles width={750} height={100} />
                        <TouchableOpacity style={style.button}>
                            <Text
                                style={[style.textButton, style.textCenter]}
                            >Asignación</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={style.footer}>
                <Footer></Footer>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        position: 'relative',
        height: height,
        width: width
    },
    header: {
        flex: 1
    },
    content: {
        flex: 7,

    },
    imageContainer: {
        flex: 7,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        height: 100,
        width: width
    },
    footer: {
        flex: 2,
        position: 'absolute',
        bottom: 0,
        left: -10,
        right: 0
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    },
    textRed: {
        color: theme.colors.secondary
    },
    button: {
        position: 'absolute',
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        marginLeft: 100,
        marginRight: 100
    },
    textButton: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    textCenter: {
        textAlign: 'center'
    },
})

export default Home