import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Table, Row } from 'react-native-table-component'
const tableDataSample = {
    tableHead: [ 'Aula', 'Inconveniente', 'Estado'],
    widthArr: [160, 160, 160 ],
    tableData: []
};

const Main = () => {
    const [data, setData] = React.useState(tableDataSample);
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: 'gray' ,borderRadius : 10}}>
                        <Row
                            data={data.tableHead}
                            widthArr={data.widthArr}
                            style={styles.head}
                            textStyle={styles.headText}
                        />
                    </Table>
                    <ScrollView>
                        <Table borderStyle={{ borderWidth: 1, borderColor: 'gray' ,borderRadius : 10}}>
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
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
});

export default Main;