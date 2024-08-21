import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './features/anecdote/anecdoteSlice'
import filterReducer from './features/filter/filterSlice'

const store = configureStore({
    reducer: {
        anecdote: anecdoteReducer,
        filter: filterReducer,
    }
})

export default store