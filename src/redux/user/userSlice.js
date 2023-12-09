import {createSlice} from "@reduxjs/toolkit";
import {
    closeFormEdit,
    editDetailUser,
    editPasswordUser,
    findUserById, getName,
    login,
    logout, openFormEdit,
    register,
} from "../../services/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    users: [],
    userDetail: {},
    isActiveEdit: false,
    nameEditOne: "",
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
            .addCase(openFormEdit.fulfilled, (state) => {
                state.isActiveEdit = true;
            })
            .addCase(closeFormEdit.fulfilled, (state) => {
                state.isActiveEdit = false;
            })
            .addCase(getName.fulfilled, (state, action) => {
                state.nameEditOne = action.payload;
            })
            .addCase(register.fulfilled, (state, action) => {
                state["users"].push(action.payload);
            })
            .addCase(editDetailUser.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
                state.isActiveEdit = false;
            })
            .addCase(editPasswordUser.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            .addCase(findUserById.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            ;
    }
})

export default userSlice.reducer