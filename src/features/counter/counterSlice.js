import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
 count: 0,
}

export const counterSlice = createSlice({
 name: 'counteryou',
 initialState: initialStateValue,
 reducers: {
  increment: (state) => {
   state.count += 1
  },
  decrement: (state) => {
   state.count -= 1
  },
  incrementByAmount: (state, action) => {
   state.count += action.payload
  },
 },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer