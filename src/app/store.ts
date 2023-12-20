import { configureStore } from '@reduxjs/toolkit'
import textHoverReducer from './features/textHoverSlice'

export const store = configureStore({
	reducer: {
		textHover: textHoverReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
