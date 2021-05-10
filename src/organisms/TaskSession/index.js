import React, { useContext } from 'react'

import { View, Text } from 'react-native'

import Task from '../../molecules/Task'

import { TaskContext } from '../../contexts/TaskContext'

import { globalColors, globalStyles } from '../../../styles/global'


const renderTasks = (card, index) => (
    <Task 
        key={ index }
        data={ card }/>
)

const TaskSession = props => {
    const viewTaskStyles = [
        globalStyles.maxHeight
    ]

    const cards = useContext(TaskContext)

    return (
        <View style={ viewTaskStyles }>

            { cards.map(renderTasks) }

        </View>
    )
}

export default TaskSession