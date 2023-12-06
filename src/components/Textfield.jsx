import {View, TextInput, StyleSheet} from 'react-native'
import theme from '../theme.js'
import { allowMultiStyle } from '../functionsFronted.js'

const TextField = (
    {
        placeholder,
        value,
        autoCapitalize = 'none',
        inputMode = 'text',
        keyboardType = 'default',
        containerStyle,
        contentStyle,
        onChangeText
    }
) => {
    const fnContainerStyle = allowMultiStyle(containerStyle)

    const fnContentStyle = allowMultiStyle(style.input, contentStyle)

    return(
    <View style={fnContainerStyle}>
        <TextInput 
        style={fnContentStyle}
        placeholder={placeholder}
        placeholderTextColor='#555555'
        autoCapitalize={autoCapitalize}
        inputMode={inputMode}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}/>
    </View>
    )
}

const style = StyleSheet.create({
    input:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        borderColor:theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight:theme.fontWeight.thin
    }
})

export default TextField