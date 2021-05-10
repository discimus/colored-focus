import React from 'react';
import { View } from 'react-native';

import TextLato from '../../atoms/TextLato'
import Button from '../../atoms/Button'

import { globalStyles } from '../../../styles/global'
import palette from '../../../styles/palette'

const MenuOptions = ({callbackResetTask, callbackCreateTask}) => {
    return (
        <View style={ [globalStyles.row, globalStyles.rowMenu] }>
            <Button 
                clickCallback={ () => callbackResetTask() }
                text='Remove' 
                mode='contained' 
                color={ palette.sapphire }/>
            <Button 
                clickCallback={ () => callbackCreateTask() }
                text='Create' 
                mode='contained' 
                color={ palette.sapphire }/>
        </View>
    )
};

export default MenuOptions