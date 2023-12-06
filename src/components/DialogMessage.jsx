import { Dialog } from '@rneui/base'
import React, { useState } from 'react'
import { Text } from 'react-native'
import ButtonText from './ButtonText.jsx'
import { button } from '../styles/button.js'

const DialogMessage = ({
    title = null,
    message = null,
    isVisible,
    overlayStyle,
    onBackdropPress,
}) => {

    return (
        <Dialog
        isVisible={isVisible}
        overlayStyle={overlayStyle}
        onBackdropPress={onBackdropPress}
        >
            <Dialog.Title>{title}</Dialog.Title>
            <Text>{message}</Text>
        <ButtonText
        text='ok'
        containerStyle={button.style}
        contentStyle={button.text}
        onPress={onBackdropPress}
        />
        </Dialog>
    )
}

export default DialogMessage
