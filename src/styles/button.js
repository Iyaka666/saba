import { StyleSheet } from 'react-native'
import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import theme from '../theme'

export const button = StyleSheet.create({
    
    style:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp(3),
        paddingTop: hp(1.5),
        paddingBottom: hp(1.5),
        paddingLeft: wp(4),
        paddingRight: wp(4)
    },
    text:{
        color:theme.colors.primary,
        fontWeight: theme.fontWeight.bold
    }
})