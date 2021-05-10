import React, { useState, useEffect, useContext } from 'react'
import { View } from 'react-native';

import Button from '../../atoms/Button'
import TextLato from '../../atoms/TextLato'
import TextInput from '../../atoms/TextInput'

import { getReadableTime } from '../../../utils/helpers'

import { globalStyles, globalColors, globalFonts } from '../../../styles/global' 

import { CurrentTimerContext } from '../../contexts/TaskContext'

const IS_TO_PAUSE = true

const Task = ({data}) => {
    const [name, setName] = useState(data.name)
    const [time, setTime] = useState(data.time)
    const [accum, setAccum] = useState(0)
    const [pause, setPause] = useState(true)
    const [initialTime, setInitialTime] = useState(Date.now())

    const currentTimer = useContext(CurrentTimerContext)

    const changeCurrentTime = () => {
        const newState = !pause

        if (newState == IS_TO_PAUSE) {
            setAccum(time)
        }

        setInitialTime(Date.now())

        setPause(newState)
    }

    const clickCallback = () => {
        changeCurrentTime()
    }

    const updateTime = () => {
        const current = Math.floor((Date.now() - initialTime) / 1000)
        setTime(current + accum)
    }

    useEffect(() => {
        if (pause == false) {
            const timeout = setTimeout(updateTime, 1000)
            return () => clearTimeout(timeout)
        }
    }, [updateTime, time, currentTimer])

    return (
        <View style={ viewTaskStyles }z>
            <TextLato 
                styleConfig={ textLatoNameStyles }
                text={ name }/>
            <TextLato 
                styleConfig={ textLatoTimeStyles }
                clickCallback= { clickCallback }
                text={ getReadableTime(time) }
            />
        </View>
    )
}

const viewTaskStyles = [
    globalColors.backgroundColorSapphire,
    globalStyles.maxWidth,
    globalStyles.flexOne,
    globalStyles.alignItemsCenter,
    globalStyles.justifyContentCenter,
    globalStyles.thinPadding,
    globalStyles.mediumMarginBotton,
    globalStyles.largeBorderRadius,
]

const textLatoNameStyles = [
    globalFonts.fontWeightLarge,
    globalColors.colorBlue,
    globalFonts.fontFamilyLatoRegular
]

const textLatoTimeStyles = [
    globalFonts.fontWeightLarge,
    globalColors.colorYellow,
    globalFonts.fontWeightMedium
]

export default Task