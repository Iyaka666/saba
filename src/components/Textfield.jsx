import {View, TextInput, StyleSheet} from 'react-native'
import theme from '../theme.js'

const TextField = (
    {
        placeholder,
        value,
        autoCapitalize = 'none',
        inputMode = 'text',
        keyboardType = 'default',
        handlerChangeText
    }
) => {
    return(
    <View>
        <TextInput 
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor='#555555'
        autoCapitalize={autoCapitalize}
        inputMode={inputMode}
        keyboardType={keyboardType}
        value={value}
        onChangeText={handlerChangeText}
        ></TextInput>
    </View>
    )
}

const style = StyleSheet.create({
    input:{
        marginTop:20,
        marginLeft:theme.margins.fieldsL,
        marginRight:theme.margins.fieldsR,
        paddingLeft:theme.paddings.fields,
        paddingRight:theme.paddings.fields,
        paddingTop:theme.paddings.fieldsVertical,
        paddingBottom:theme.paddings.fieldsVertical,
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        borderColor:theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight:theme.fontWeight.thin
    }
})

export default TextField