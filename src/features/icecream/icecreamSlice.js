import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    noOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams--
        },
        restocked: (state, action) => {
            state.noOfIcecreams += action.payload
        }
    }
})

export default icecreamSlice.reducer

export const { ordered, restocked } = icecreamSlice.actions 