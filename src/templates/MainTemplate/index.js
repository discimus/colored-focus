import React, { useState } from 'react'

import { View } from 'react-native'

import TaskSession from '../../organisms/TaskSession'
import MenuSession from '../../organisms/MenuSession'

import { TaskContext, CurrentTimerContext } from '../../contexts/TaskContext'

import { globalStyles } from '../../../styles/global'

import { generateRandomName } from '../../../utils/helpers'

const viewTaskSessionStyles = [
    globalStyles.halfContent,
    globalStyles.maxWidth
]

const viewMenuSessionStyles = [
    globalStyles.halfRowMenu, 
    globalStyles.middleContent, 
    globalStyles.thinMargin
]

const viewMainTemplateStyles = [
    globalStyles.alignItemsCenter, 
    globalStyles.maxHeight,
    globalStyles.maxWidth,
    globalStyles.marginTopStatusBarHeight
]

const MainTemplate = props => {

    const [currentTasks, setCurrentTasks] = useState([])

    const callbackResetTask = () => {
        const lenght = currentTasks.length
        const newerSet = currentTasks.slice(0, lenght-1)
        setCurrentTasks(newerSet)
    }

    const callbackCreateTask = () => {

        if (currentTasks.length > 3) {
            alert('Task Limit!')
        } else {
            const newerSet = currentTasks.concat([{
                name: generateRandomName(),
                time: 0
            }])
    
            setCurrentTasks(newerSet)
        }

    }

    return (
        <TaskContext.Provider value={ currentTasks }>
        <CurrentTimerContext.Provider value={ {
                current: null,
                pause: false
            } }
        >
            <View style={ viewMainTemplateStyles }>
                <View style={ viewTaskSessionStyles }>
                        <TaskSession>
                        </TaskSession>
                </View>
                <View style={ viewMenuSessionStyles }>
                    <MenuSession
                        callbackResetTask={ callbackResetTask }
                        callbackCreateTask={ callbackCreateTask }>
                    </MenuSession>
                </View>            
            </View>
        </CurrentTimerContext.Provider>
        </TaskContext.Provider>
    )

}

export default MainTemplate