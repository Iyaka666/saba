import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import constants from 'expo-constants'
import { Agenda } from 'react-native-calendars';
import ButtonText from '../components/ButtonText.jsx'
import Header from '../components/HeaderWithUser.jsx'
import Footer from '../components/Footer.jsx'
import theme from '../theme.js'

const { height, width } = Dimensions.get('window')

const DocentAgenda = () => {

    const [selectedDay, setSelectedDay] = useState('');
    const [renderedEventIds, setRenderedEventIds] = useState(new Set());

    const scheduleSystemRoom = "Solicitar sala\nde sistemas"
    const cancelClass = "Cancelar\nclase"
    const reportProblems = "Notificar\nproblemas"

    const items = {
        '2023-11-28': [{ id: 1, name: 'Reunión de trabajo' }, { id: 2, name: 'Cita médica' }],
        '2023-11-29': [{ id: 3, name: 'Comida con amigos' }, { id: 4, name: 'Entrenamiento' }],
        '2023-12-01': [{ id: 5, name: 'Prueba' }, { id: 6, name: 'Otro' }],
        '2023-12-04': [{ id: 7, name: 'Prueba' }, { id: 8, name: 'Otro' }],
    };

    const renderItem = () => {
        const eventsForSelectedDay = items[selectedDay] || [];
        return (
            <View style={style.ItemsContainer}>
                {eventsForSelectedDay.map((event) => {
                    if (!renderedEventIds.has(event.id)) {
                        setRenderedEventIds((prevIds) => new Set(prevIds).add(event.id));
                        return (
                            <View key={event.id} style={style.eventItem}>
                                <Text>{event.name}</Text>
                            </View>
                        );
                    }
                    return null;
                })}
            </View>
        );
    };

    const renderEmptyData = () => {
        return (
            <View>
                <Text>No hay eventos para este día</Text>
            </View>
        );
    };

    const onDayPress = (day) => {
        setSelectedDay([])
        setSelectedDay(day.dateString);
    };

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setSelectedDay(today);
    }, []);

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header></Header>
            </View>

            <View style={style.content}>
                <View style={style.agendaContainer}>
                    <Agenda
                        items={items}
                        renderItem={renderItem}
                        onDayPress={onDayPress}
                        renderEmptyData={renderEmptyData}
                        showOnlySelectedDayItems={true}
                        theme={style.themeAgenda}
                    />
                </View>
                <View style={style.ButtonsContainer}>
                    <ButtonText
                        text={scheduleSystemRoom}
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                    />
                    <ButtonText
                        text={cancelClass}
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                    />
                    <ButtonText
                        text={reportProblems}
                        containerStyle={style.button}
                        contentStyle={[style.textButton, style.textCenter]}
                    />
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
        flex: 8,
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
        borderRadius: 20,
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
    }
})

export default DocentAgenda