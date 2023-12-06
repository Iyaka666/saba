import React from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from './../components/HeaderWithUser.jsx'
import Footer from './../components/Footer.jsx'
import Mapa from './../../assets/svgMapa.svg'
import PortaPapeles from './../../assets/svgPortaPapeles.svg'
import Salon from './../../assets/svgSalon.svg'
import theme from './../theme.js'

const { height, width } = Dimensions.get('window')

const Home = () => {
    //----------------------------  Hooks ----------------------------
    //----------------------------  End hooks ------------------------

    const ImageOpcion1 = Salon;
    const ImageOpcion2 = Mapa;
    const TextOpcion1 = 'Horario';
    const TextOpcion2 = 'Mapa';
    /*
    if (rol == professor) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }
    if (rol == Student) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }
    if (rol == Staf) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }*/


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>

                <View style={style.imageContainer}>
                    <ImageOpcion1 width={225} height={150} />
                    <Pressable style={style.button}>
                        <Text
                            style={[style.textButton, style.textCenter]}
                        >{TextOpcion1}</Text>
                    </Pressable>
                </View>

                <View style={style.imageContainer}>
                    <ImageOpcion2 width={225} height={150} />
                    <Pressable style={style.button}>
                        <Text
                            style={[style.textButton, style.textCenter]}
                        >{TextOpcion2}</Text>
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
        position: 'absolute',
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

export default Home