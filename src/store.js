import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './features/modelSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer
    }
})
