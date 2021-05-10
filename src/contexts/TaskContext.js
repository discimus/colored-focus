import { createContext } from 'react'

const currentTimerContextConfig = {
    current: null,
    pause: false
}

export const TaskContext = createContext(null)
export const CurrentTimerContext = createContext(null)