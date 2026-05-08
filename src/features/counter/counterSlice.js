import { createSlice } from '@reduxjs/toolkit'

// Initial state for our counter feature
const initialState = {
    value: 0,
    status: 'idle'
}

// createSlice handles the creation of action creators and action types
export const counterSlice = createSlice({
    name: 'counter', // Name of the slice
    initialState, // Initial state defined above

    // Reducers are functions that determine how the state should be updated
    reducers: {
        // Each reducer receives the current state and an action
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers
            // It uses Immer library under the hood to produce immutable updates
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Reducer with payload
        incrementByAmount: (state, action) => {
            // action.payload contains the data sent with the action
            state.value += action.payload
        }
    }
})

// Export the action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer

// Selectors - used to select data from the store
export const selectCount = (state) => state.counter.value