import {createSlice} from "@reduxjs/toolkit";
import {login, logout, register} from "../../services/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload.data
                localStorage.setItem('user', JSON.stringify(action.payload.data))
            })
            .addCase(logout.fulfilled, (state) => {
                state.currentUser = null;
                localStorage.removeItem('user');
            })
            .addCase(register.fulfilled, (state, action) => {
                state["users"].push(action.payload);
            });

    }
})

export default userSlice.reducer