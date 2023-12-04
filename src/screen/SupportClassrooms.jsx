import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Header from '../components/HeaderWithUser.jsx'
import Table from '../components/Table-Scroll.jsx'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Textfield from '../components/Textfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Constants from 'expo-constants'
import theme from './../theme.js'
import { button } from '../styles/button.js'
import { SimpleLineIcons } from '@expo/vector-icons';
import { textfield } from '../styles/textField.js'




const SupportClassrooms = ({ navigation }) => {
  

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header screen='LogedIn'
                    navigation={navigation} />
            </View>

            <View style={styles.content}>

                <View style={styles.title}>
                    <Text> Listado de salones </Text>
                </View>

                <Textfield containerStyle={styles.textfieldSearch} contentStyle={{textAlign:'center'}} />
                <Pressable  style={styles.magnifier}>
                    <SimpleLineIcons name="magnifier" size={20} color="#e40613" />
                </Pressable>
                <Table />

            </View>

            <View style={styles.footer}>
                <ButtonText text='Ordenamiento aleatorio' containerStyle={button.style} contentStyle={[button.text, styles.textCenter]} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: theme.colors.primary,
        position: 'relative',
        height: hp(100),
        width: wp(100),
    },
    header: {
        flex: 1,
        marginTop: Constants.statusBarHeight + hp(5),
    },
    content: {
        padding: 10,
        flex: 7
    },
    footer: {
        flex: 2
    },
    title: {
        fontSize: hp(1.7),
        textAlign: 'center',
        marginTop: hp(3),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textCenter: {
        textAlign: 'center'
    },
    textfieldSearch: {
        position: 'relative',

    },
    magnifier: {
        position: 'absolute',
        top: hp(7.5),
        left: wp(5),
        zIndex: 5
    }




})

export default SupportClassrooms;