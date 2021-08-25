import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
export const store = configureStore({
 reducer: {
  counterme: counterReducer,
  theme: themeReducer,
 },
})