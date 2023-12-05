import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
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

const Main = () => {
    const [data, setData] = React.useState(tableDataSample);
    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    rowSection: { height: 60, backgroundColor: '#FEFCFC' },
    head: { height: 44, backgroundColor: '#E40613' },
    headText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

export default Main;