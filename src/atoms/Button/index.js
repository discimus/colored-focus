import React from 'react'

import { Button as PaperButton } from 'react-native-paper'

const defaultCallback = () => {
    alert('...')
}

const Button = ({ 
    icon = '', 
    mode = '', 
    clickCallback = defaultCallback, 
    text = '',
    color = '',
    padding = 6
}) => {
    return (
        <PaperButton 
            onPress={ () => clickCallback() }
            icon={ icon } 
            color={ color }
            mode={ mode }>
            { text }
        </PaperButton>
    )
}

export default Button