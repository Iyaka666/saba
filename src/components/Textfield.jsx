import {SafeAreaProvider, TextInput, Text} from 'react-native'
import Theme from './../theme.js'

const TextField = (placeholder, autoCapitalize) => {
    //----------------------------- Hooks -----------------------------

    //----------------------------- end Hooks -------------------------

    return(
    <SafeAreaProvider>
        <TextInput 
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor='#000000'
        autoCapitalize={autoCapitalize ? 'words':'none'}
        ></TextInput>
    </SafeAreaProvider>
    )
}

const style = StyleSheet.create({
    input:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Theme.colors.textPrimary,
        fontWeight: Theme.fontWeight.thin,
        backgroundColor: Theme.colors.primary
    }
})

export default TextField