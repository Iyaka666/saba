import { StyleSheet } from 'react-native'
import theme from '../theme.js'

const dialog = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary
    },
    content:{
        color: theme.colors.textPrimary
    }
})

export default dialog