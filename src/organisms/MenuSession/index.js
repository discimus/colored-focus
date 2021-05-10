import React from 'react'

import { View, Text } from 'react-native'

import MenuOptions from '../../molecules/MenuOptions'

import { globalStyles, globalColors } from '../../../styles/global'

const MenuSession = ({callbackResetTask, callbackCreateTask}) => {
    const viewMenuOptionsStyles = [
        globalStyles.maxHeight,
        globalStyles.justifyContentCenter
    ]

    return (
        <View style={ viewMenuOptionsStyles }>
            <MenuOptions 
                callbackResetTask={ callbackResetTask }
                callbackCreateTask={ callbackCreateTask }/>
        </View>
    )
}

export default MenuSession