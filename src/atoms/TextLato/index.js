import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import { globalFonts } from '../../../styles/global'

const isFalse = value => value === false

const renderAppLoading = () => <AppLoading/>
const renderTextView = ({message, clickCallback, styles}) => (
    <View>
        <Text 
            onPress={ () => clickCallback() }
            style={ styles }>
            { message }
        </Text>
    </View>
)

const defaultCallback = () => {
    // alert('...')
}

const TextLato = function ({text = '...', clickCallback = defaultCallback, styleConfig = []}) {

    const [fontsLoaded] = useFonts({
        'Lato-BlackItalic': require('../../../assets/fonts/Lato-BlackItalic.ttf'),
        'Lato-Black': require('../../../assets/fonts/Lato-Black.ttf'),
        'Lato-Bold': require('../../../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Light': require('../../../assets/fonts/Lato-Light.ttf'),
        'Lato-ThinItalic': require('../../../assets/fonts/Lato-ThinItalic.ttf')
    });

    const textConfig = {
        message: text,
        clickCallback: clickCallback,
        styles: styleConfig
    }

    const responseComponent = isFalse(fontsLoaded) ? renderAppLoading() : renderTextView(textConfig)

    return responseComponent
}

export default TextLato