import { configureStore } from '@reduxjs/toolkit'
import CarSlice from '../features/CarSlice'


const store = configureStore({
    reducer: {
        CarSlice: CarSlice,

    },
    devTools: true
})
export { store }