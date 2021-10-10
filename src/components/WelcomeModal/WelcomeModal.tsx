import React from 'react'
import { View, Text, Modal } from 'react-native'

interface Welcome{
    isVisible:boolean,
    onDismiss: () => void | Promise<any>;

}

const WelcomeModal = ({
    isVisible,
    onDismiss=()=>{}
}) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onDismiss}>

        <View>
            <Text>Aloooooou</Text>
        </View>


        </Modal>
    )
}

export default WelcomeModal
