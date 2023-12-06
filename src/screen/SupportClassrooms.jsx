import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import Header from '../components/HeaderWithUser.jsx'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Textfield from '../components/Textfield.jsx'
import { Table, Row, Rows } from 'react-native-table-component'
import { footer } from '../styles/footer.js'
import Footer from '../components/Footer.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Constants from 'expo-constants'
import theme from './../theme.js'
import { button } from '../styles/button.js'
import { SimpleLineIcons } from '@expo/vector-icons';
import { textfield } from '../styles/textField.js'

const tableDataSample = {
    tableHead: ['Materia', 'Docente', 'Horario', 'Aula'],
    widthArr: [160, 160, 160, 120],
    tableData: [['Ecologia', 'Alan Giraldo Lopez', '10:00-13:00', '301'],
    ['Microbiologia', 'Neyla Benitez Campo', '8:00-12:00', '309'],
    ['Bioinformatica', 'Andres Orlando Castillo Giraldo', '8:00-12:00', '215'],
    ['Metodologias de autoformacion', 'Monica Ortiz Palacion', '18:30-21:30', '302'],
    ['Introduccion a la investigacion', 'Calos Augusto Osorio Marulanda', '14:00-16:00', '212'],
    ]
};


const SupportClassrooms = ({ navigation }) => {

    //------------Vueltas necesarias para la busqueda de asignatura-----------------------// 
    const [data, setData] = useState(tableDataSample);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);

        // Filtrar datos en base al texto de búsqueda
        const filteredData = tableDataSample.tableData.filter((rowData) =>
            rowData.some((cell) => cell.toLowerCase().includes(text.toLowerCase()))
        );

        // Actualizar los datos en el estado
        setData({
            ...tableDataSample,
            tableData: filteredData,
        });
    };
    //------------------------------------------------------------------------------------//


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
                <Textfield
                    autoCapitalize='words'
                    placeholder='Buscar..'
                    containerStyle={styles.textfieldSearch}
                    contentStyle={{ textAlign: 'center' }}
                    value={searchText}
                    onChangeText={handleSearch} />

                <View style={styles.containerTable}>
                    <ScrollView horizontal={true}>
                        <View>
                            <Table borderStyle={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
                                <Row
                                    data={data.tableHead}
                                    widthArr={data.widthArr}
                                    style={styles.head}
                                    textStyle={styles.headText}
                                />
                                {/* <Rows data={tableDataSample.tableData} textStyle={styles.text} widthArr={data.widthArr}/> */}
                            </Table>
                            <ScrollView>
                                <Table borderStyle={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>

                                    {data.tableData.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={data.widthArr}
                                            style={styles.rowSection}
                                            textStyle={styles.text}
                                        />
                                    ))}
                                </Table>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>

            </View>

            <View style={styles.footer}>
                <Footer containerStyle={[styles.footer, footer.style]} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerTable: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },

    rowSection: {
        height: 60,
        backgroundColor: '#FEFCFC'
    },

    head: {
        height: 44,
        backgroundColor: '#E40613',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        margin: 6,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
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