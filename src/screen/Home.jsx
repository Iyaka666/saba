import React from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import Header from './../components/Header.jsx'
import Footer from './../components/Footer.jsx'
import { footer } from '../styles/footer.js'
import Mapa from './../../assets/svgMapa.svg'
import PortaPapeles from './../../assets/svgPortaPapeles.svg'
import Salon from './../../assets/svgSalon.svg'
import theme from './../theme.js'

const { height, width } = Dimensions.get('window')

const Home = ({navigation}) => {
    //----------------------------  Hooks ----------------------------
    //----------------------------  End hooks ------------------------
    const handlerRegreso = () => {
        navigation.navigate('ProfessorAgenda')
    }


    const ImageOpcion1 = Salon;
    const ImageOpcion2 = Mapa;
    const TextOpcion1 = 'Horario';
    const TextOpcion2 = 'Mapa';
    /*
    if (roll == professor) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }
    if (roll == Student) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }
    if (roll == Staf) {
        const ImageOpcion1 = Salon;
        const ImageOpcion2 = Mapa;
        const TextOpcion1 = 'Horario';
        const TextOpcion2 = 'Mapa';
    }*/


    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header
                    screen={'logedIn'}
                    navigation={navigation}
                />
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
                    <Pressable style={style.button}
                    onPress={handlerRegreso}>
                        <Text
                            style={[style.textButton, style.textCenter]}
                        >{TextOpcion2}</Text>
                    </Pressable>
                </View>
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
    footer: {
        flex: 1
    }
})

export default Home