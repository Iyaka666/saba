import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Header from '../components/HeaderWithUser.jsx'
import Table from '../components/Table-Support.jsx'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Footer from '../components/Footer.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Constants from 'expo-constants'
import theme from './../theme.js'
import { footer } from '../styles/footer.js'
import { SimpleLineIcons } from '@expo/vector-icons';

const SupporRequest = ({navigation}) =>{
    return(
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Header screen = 'logedIn' navigation = {navigation}/>
        </View>
        
        <View style = {styles.content}>
            <Text style = {styles.tableTitle}>Notificación de inconvenientes</Text>
            <Table/>
        </View>
        
        <View  style = {styles.footer}>
            <Footer containerStyle={[styles.footer, footer.style]}/>
        </View>

    </View>

)}


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
    tableTitle:{
        fontWeight:'bold',
        paddingLeft: 10,
        paddingTop:10,
    }
})

export default SupporRequest;