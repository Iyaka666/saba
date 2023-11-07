import {View, TextInput, StyleSheet} from 'react-native'
import theme from '../../../theme.js'

const props = {
    placeholder:"",
    value:"",
    autoCapitalize:'none',
    inputMode:'text',
    keyboardType:'default',
    handlerChangeText: () => null
}

const TextField = (props) => {
    return(
    <View>
        <TextInput 
        style={style.input}
        placeholder={props.placeholder}
        placeholderTextColor='#000000'
        autoCapitalize={props.autoCapitalize}
        inputMode={props.inputMode}
        keyboardType={props.keyboardType}
        value={props.value}

        onChangeText={props.handlerChangeText}
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