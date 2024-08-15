export const voteAnecdote = (id) => {
    return {
        type: 'VOTE',
        payload: { id },
    }
}

export const createAnecdote = (content) => {
    return {
        type: 'CREATE',
        payload: {
            content,
            id: (100000 * Math.random()).toFixed(0),
            votes: 0,
        }
    }
}