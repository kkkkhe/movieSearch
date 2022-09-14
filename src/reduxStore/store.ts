import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import HeroSlice from './Swiper/InfoSlice'
import { movieApi } from '../services/apiConfig'
const reducers = combineReducers({
	heroSlice: HeroSlice,
	[movieApi.reducerPath]: movieApi.reducer
})

export const store =  () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']