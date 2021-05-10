import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import palette from './palette'

const globalStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: palette.blue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    row: {
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    col: {
        flexDirection: 'column',
        // backgroundColor: 'yellow',
        fontFamily: 'Lato-Regular',
    },
    rowMenu: {
        width: '100%',
        justifyContent: 'space-around'
    },
    halfContent: {
        flex: 9,
        // backgroundColor: palette.red
    },
    halfRowMenu: {
        flex: 1,
        // backgroundColor: palette.cyan
    },
    alignItemsCenter:{
        alignItems: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    maxHeight: {
        height: '100%'
    },
    maxWidth: {
        width: '100%'
    },
    thinMargin: {
        margin: 3
    },
    thinPadding: {
        padding: 3
    },
    flexOne: {
        flex: 1
    },
    thinMarginBotton: {
        marginBottom: 3
    },
    mediumMarginBotton: {
        marginBottom: 6
    },
    thinMarginTop: {
        marginTop: 3
    },
    mediumMarginTop: {
        marginTop: 6
    },
    thinborderWidth: {
        borderWidth: 3
    },
    thinBorderRadius: {
        borderRadius: 3
    },
    largeBorderRadius: {
        borderRadius: 27
    },
    marginTopStatusBarHeight: {
        marginTop: StatusBar.currentHeight
    }
})

const globalColors = {
    backgroundColorGreen: {
        backgroundColor: 'green'
    },
    backgroundColorCyan: {
        backgroundColor: palette.cyan
    },
    backgroundColorSapphire: {
        backgroundColor: palette.sapphire
    },
    borderColorBlue: {
        borderColor: palette.blue
    },
    colorBlue: {
        color: palette.cyan
    },
    colorYellow: {
        color: palette.yellow
    }
}

const globalFonts = {
    fontWeightLarge: {
        fontSize: 60
    },
    fontWeightMedium: {
        fontSize: 45
    },
    fontFamilyLatoRegular: {
        fontFamily: 'Lato-Regular'
    }
}

exports.globalStyles = globalStyles
exports.globalColors =  globalColors
exports.globalFonts = globalFonts