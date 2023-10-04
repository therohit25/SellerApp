import { createSlice } from '@reduxjs/toolkit'
import { cardata } from '../data/CarData'

const initialState = {
    carData: cardata,
    searchParam: ""
}

const cardataSlice = createSlice({
    name: 'carDetails',
    initialState,
    reducers: {
        SetCardDetails: (state, action) => { state.carData = action.payload },
        SetSearchParameter: (state, action) => {
            state.searchParam = action.payload
        }
    }
})

export const { SetCardDetails, SetSearchParameter } = cardataSlice.actions
export default cardataSlice.reducer;