import {createSlice} from "@reduxjs/toolkit";
import {login} from "./webSocketService";



const initialState = {
    notify: [],
}

const webSocketSlice = createSlice({
    name: 'webSocket',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload.data
                localStorage.setItem('user', JSON.stringify(action.payload.data))
            })

        ;
    }
})

export default webSocketSlice.reducer