import {createSlice} from "@reduxjs/toolkit";
import {editDetailUser, findUserById, login, logout, register} from "../../services/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    users: [],
    userDetail: {},
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
            })
            .addCase(editDetailUser.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            .addCase(findUserById.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            });
    }
})

export default userSlice.reducer