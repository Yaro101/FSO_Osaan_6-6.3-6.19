import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification: (state, action) => action.payload,
        clearNotification: () => ''
    }
})

// Helper function for setting message, timout, dispatch and actions
export const setNotificationWithTimout = (message, timoutInSeconds = 5) => {
    return (dispatch) => {
        dispatch(setNotification(message))

        setTimeout(() => {
            dispatch(clearNotification())
        }, timoutInSeconds * 1000)
    }
}

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer