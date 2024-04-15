import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loaded: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
} )

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) =>  {
            state.loaded = false
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loaded = true;
            state.users = action.payload
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loaded = true
            state.users = []
            state.error = action.error.message
        })
    },

})

export default userSlice.reducer
