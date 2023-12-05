import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import Header from '../components/HeaderWithUser.jsx'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Textfield from '../components/Textfield.jsx'
import ButtonText from '../components/ButtonText.jsx'
import Constants from 'expo-constants'
import theme from './../theme.js'
import { button } from '../styles/button.js'
import { Table, Row, Rows } from 'react-native-table-component'
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse'
import { SimpleLineIcons } from '@expo/vector-icons';
import { textfield } from '../styles/textField.js'


const tableDataSample = {
    tableHead: ['Materia', 'Docente', 'Horario', 'Aula'],
    widthArr: [160, 160, 160, 120],
    tableData: [
    ]
};


const Teacher = ({ navigation }) => {
    const [data, setData] = useState(tableDataSample);
    const [searchText, setSearchText] = useState('');

    //------------------Apertura del explorador de archivos-------------------------//
    const pickDocument = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync({
            type: 'text/csv',
          });
    
          if (result.type === 'success') {
            const fileContent = await FileSystem.readAsStringAsync(result.uri);
            parseCSV(fileContent);
          }
        } catch (err) {
          console.error('Error al seleccionar el archivo', err);
        }
      };

      const parseCSV = csvData => {
        Papa.parse(csvData, {
          complete: result => {
            // result.data es un arreglo con los datos del CSV
            const dataArray = result.data;
    
            // Formatear los datos para react-native-table-component
            const headerData = dataArray[0]; // Suponemos que la primera fila es la cabecera
            const tableData = dataArray.slice(1); // Resto de filas son datos
    
            setTableData({
              headerData,
              tableData,
            });
          },
          header: true, // Si el CSV tiene encabezados
        });
      };


    //------------Vueltas necesarias para la busqueda de asignatura-----------------------//
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

    //------------Cosa que pode la fecha actual--------------------------------//
    const [currentDate, setDate] = useState('');
    useEffect(() => {
        var date = new Date().toLocaleDateString('default', { year: 'numeric', month: 'long', weekday: 'long', });
        setDate(
            date
        );
    });
    //--------------------------------------------------------------------------------//

    //----------------------renderizacion de cosas-------------------------------//
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header screen='LogedIn'
                    navigation={navigation} />
            </View>

            <View style={styles.content}>
                <View style={styles.title}>
                    <Text> {currentDate} </Text>
                </View>

                <Textfield
                    autoCapitalize='words'
                    placeholder='Buscar..'
                    containerStyle={styles.textfieldSearch}
                    contentStyle={{ textAlign: 'center' }}
                    value={searchText}
                    onChangeText={handleSearch}
                />
                <View style={styles.containerTable}>
                    {tableDataSample.tableData.length > 0 &&(
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
                    )}
                </View>

                {/* <Pressable style={styles.magnifier}>
                    <SimpleLineIcons name="magnifier" size={20} color="#e40613" />
                </Pressable> */}
                {/* Tabla y demas */}
                {/* <Table /> */}
            </View>

            <View style={styles.footer}>
                <ButtonText title="Seleccionar Archivo" onPress={pickDocument} text='                CSV                ' containerStyle={button.style} contentStyle={[button.text, styles.textCenter]} />
                <ButtonText text='Ordenamiento aleatorio' containerStyle={button.style} contentStyle={[button.text, styles.textCenter]} />
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
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
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
    },

})

export default Teacher;