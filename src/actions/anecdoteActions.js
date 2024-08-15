export const voteAnecdote = (id) => {
    return {
        type: 'VOTE_ANECDOTE',
        payload: { id },
    }
}

export const createAnecdote = (content) => {
    return {
        type: 'CREATE_ANECDOTE',
        payload: {
            content,
            id: (100000 * Math.random()).toFixed(0),
            votes: 0,
        }
    }
}