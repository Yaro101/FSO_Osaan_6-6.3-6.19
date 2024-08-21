import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './features/notification/notificationSlice'
import anecdoteReducer from './features/anecdote/anecdoteSlice'
import filterReducer from './features/filter/filterSlice'

const store = configureStore({
    reducer: {
        anecdote: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer,
    }
})

export default store