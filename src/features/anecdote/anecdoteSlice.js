import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState,
    reducers: {
        vote: (state, action) => {
            const id = action.payload.id
            const anecdoteToChange = state.find((anecdote) => anecdote.id === id)
            // anecdoteToChange.votes += 1
            anecdoteToChange.votes = action.payload.votes
        },
        append: (state, action) => {
            state.push(action.payload)
        },
        setAnecdote: (state, action) => {
            return action.payload
        }
    }
})

export const { vote, append, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdote = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdote(anecdotes))
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(append(newAnecdote))
    }
}

export const voteAnecdote = anecdote => {
    return async dispatch => {
        const updatedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }
        const response = await anecdoteService.updateVote(anecdote.id, updatedAnecdote)
        dispatch(vote(response))
    }
}

export default anecdoteSlice.reducer