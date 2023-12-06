import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import Header from '../components/HeaderWithUser.jsx'
import { Table, Row, Rows } from 'react-native-table-component'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Footer from '../components/Footer.jsx'
import { Picker } from '@react-native-picker/picker'
import ButtonText from '../components/ButtonText.jsx'
import Constants from 'expo-constants'
import theme from './../theme.js'
import { footer } from '../styles/footer.js'
import { SimpleLineIcons } from '@expo/vector-icons';

const tableDataSample = {
    tableHead: ['Aula', 'Inconveniente', 'Estado'],
    widthArr: [160, 160, 160],
    tableData: [['305', 'posible virus en pc', '']]
};

const SupporRequest = ({ navigation }) => {
    const [data, setData] = useState(tableDataSample);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header screen='logedIn' navigation={navigation} />
            </View>

            <View style={styles.content}>
                <Text style={styles.tableTitle}>Notificación de inconvenientes</Text>
                <View >
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
                                            {...(index === data.tableData.length - 1 && { picker: true })}

                                        >
                                            {rowData.map((cellData, colIndex) => (
                                                <View key={colIndex} style={{ flex: 1 }}>
                                                    {colIndex === rowData.length - 1 && index === data.tableData.length - 1 ? (
                                                        <View style={styles.pickerContainer}>
                                                            <Picker style={styles.picker}
                                                                ref={pickerRef}
                                                                selectedValue={selectedLanguage}
                                                                onValueChange={(itemValue, itemIndex) =>
                                                                    setSelectedLanguage(itemValue)
                                                                }>

                                                                <Picker.Item label="En progreso" value="1" />
                                                                <Picker.Item label="Resuelto" value="2" />
                                                            </Picker>
                                                        </View>
                                                    ) : (
                                                        <Text style={styles.text}>{cellData}</Text>
                                                    )}
                                                </View>
                                            ))}
                                        </Row>
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
    pickerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    picker: { height: 40, width: 100 },
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
    tableTitle: {
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
    }
})

export default SupporRequest;