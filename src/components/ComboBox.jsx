import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import theme from '../../../theme.js'

const ComboBox = () => {
    const options = ["Manzana", "Banana", "Cereza", "Dátil", "Uva"];
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <View>
            <Picker
                selectedValue={selectedOption}
                onValueChange={handleOptionChange}
                style={style.picker}>
                <Picker.Item label="Selecciona una opción" value="" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    )
}

const style = StyleSheet.create({
    picker: {
        marginTop: 20,
        marginLeft: theme.margins.fieldsL,
        marginRight: theme.margins.fieldsR,
        paddingLeft: theme.paddings.fields,
        paddingRight: theme.paddings.fields,
        paddingTop: theme.paddings.fieldsVertical,
        paddingBottom: theme.paddings.fieldsVertical,
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: theme.fontWeight.thin
    }
})

export default ComboBox