import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const footer = StyleSheet.create({
    style:{
        position:'absolute',
        bottom:hp(-3.8),
        left:-10,
        right:0
    }
})