import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import { Agenda } from 'react-native-calendars';
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { footer } from '../styles/footer.js'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const ProfessorAgenda = ({ navigation }) => {

    const [selectedDay, setSelectedDay] = useState('');

    const scheduleSystemRoom = "Solicitar sala\nde sistemas"
    const cancelClass = "Cancelar\nclase"
    const reportProblems = "Notificar\nproblemas"

    const items = {
        '2023-11-28': [{ id: 1, inicio: '08:00:00', fin: '10:00:00', name: 'Ecología', salon: '301' },
        { id: 2, inicio: '14:00:00', fin: '18:00:00', name: 'Microbiología', salon: '209' }],

        '2023-11-29': [{ id: 3, inicio: '09:00:00', fin: '11:00:00', name: 'Bioinformática', salon: '108' },
        { id: 4, inicio: '15:00:00', fin: '18:30:00', name: 'Metodologías de autoformación', salon: '120' }],

        '2023-12-01': [{ id: 5, inicio: '08:00:00', fin: '10:00:00', name: 'Microbiología', salon: '212' },
        { id: 6, inicio: '13:00:00', fin: '16:00:00', name: 'Ecología', salon: '314' }],

        '2023-12-05': [{ id: 7, inicio: '08:00:00', fin: '10:00:00', name: 'Ecología', salon: '301' },
        { id: 8, inicio: '14:00:00', fin: '18:00:00', name: 'Microbiología', salon: '209' }],
    };


    const renderItem = (item) => {
        return (
            <View key={item.id} style={style.ItemsContainer}>
                <Text>{item.name}</Text>
                <Text>Salon: {item.salon}</Text>
            </View>
        );
    };

    const renderDay = (day, item) => {
        return (
            <View style={{ width: 70, marginTop: 4, marginBottom: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.inicio}</Text>
                <Text style={{ marginTop: -8, marginBottom: -8 }}>-</Text>
                <Text>{item.fin}</Text>
            </View>
        );
    }
    const renderEmptyData = () => {
        return (
            <View>
                <Text>No hay eventos para este día</Text>
            </View>
        );
    };

    const onDayPress = (day) => {
        setSelectedDay(day.dateString);
    };

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setSelectedDay(today);
    }, []);

    const handlerSchedule = () => {
        navigation.navigate('ScheduleSystemRoom')
    }
    const handlerCancel = () => {
        navigation.navigate('CancelClass')
    }
    const handlerReport = () => {
        {console.log(navigation)}
        navigation.navigate('ReportProblems')
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header
                    screen={'logedIn'}
                    navigation={navigation}
                />
            </View>

            <View style={style.content}>
                <View style={style.agendaContainer}>
                    <Agenda
                        key={selectedDay}
                        items={items}
                        selected={selectedDay}
                        renderItem={renderItem}
                        renderDay={renderDay}
                        onDayPress={onDayPress}
                        renderEmptyData={renderEmptyData}
                        showOnlySelectedDayItems={true}
                        theme={style.themeAgenda}
                    />
                </View>
                <View style={style.ButtonsContainer}>
                    <ButtonText
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                        text={scheduleSystemRoom}
                        onPress={handlerSchedule}
                    />
                    <ButtonText
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                        text={cancelClass}
                        onPress={handlerCancel}
                    />
                    <ButtonText
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                        text={reportProblems}
                        onPress={handlerReport}
                    />
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
        flex: 6,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    agendaContainer: {
        flex: 8,
        width: width - 40,
        borderRadius: 20,
        overflow: 'hidden'
    },
    button: {
        padding: 8,
        width: 100
    },
    textButton: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    },
    ButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: width
    },
    ItemsContainer: {
        flex: 1,
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        overflow: 'hidden'
    },
    textCenter: {
        textAlign: 'center'
    },
    themeAgenda: {
        selectedDayBackgroundColor: 'white',
        dotColor: 'white',
        calendarBackground: 'rgb(228, 6, 19)',
        todayTextColor: 'white',
        dayTextColor: 'white',
        monthTextColor: 'white',
        textSectionTitleColor: 'white',
        textSectionTitleDisabledColor: 'rgb(249, 249, 249)',
        selectedDayTextColor: 'rgb(228, 6, 19)',
        selectedDotColor: 'rgb(228, 6, 19)'
    },
    footer: {
        flex: 1
    }
})

export default ProfessorAgenda