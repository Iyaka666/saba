import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const textfield = StyleSheet.create({    
    style:{
        marginTop: hp(1.9),
        marginBottom: hp(1.9),
        marginLeft: wp(20),
        marginRight: wp(20)
    },
    content:{    
        paddingTop: hp(1),
        paddingBottom: hp(1),
        paddingLeft: wp(3),
        paddingRight: wp(3)
    }
}
)
