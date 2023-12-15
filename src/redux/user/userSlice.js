import {createSlice} from "@reduxjs/toolkit";
import {
    AdminApproveRenterToOwner,
    AdminBlockUser,
    AdminGetListOwner,
    AdminGetListRenter, AdminGetListUser,
    AdminOpenUser,
    closeFormEdit,
    editDetailUser,
    editPasswordUser,
    findAdminById,
    findUserById,
    getName,
    login,
    logout,
    openFormEdit,
    register,
    ShowListUserAreWaitingConfirmed,
} from "../../services/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    users: [],
    userDetail: {},
    isActiveEdit: false,
    nameEditOne: "",
    listUser:[],
    listUserWaitingConfirm:[],
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
                state.currentUser = action.payload.data
                state.isActiveEdit = false;
            })
            .addCase(editPasswordUser.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            .addCase(findUserById.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            .addCase(findAdminById.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
            })
            .addCase(AdminApproveRenterToOwner.fulfilled, (state, action) => {
                state.listUserWaitingConfirm = state.listUserWaitingConfirm.map((item) => {
                    if(item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item;
                    }
                });
            })
            .addCase(ShowListUserAreWaitingConfirmed.fulfilled, (state, action) => {
                state.listUserWaitingConfirm = action.payload
            })
            .addCase(AdminGetListOwner.fulfilled, (state, action) => {
                state.listUser = action.payload
            })
            .addCase(AdminGetListRenter.fulfilled, (state, action) => {
                state.listUser = action.payload
            })
            .addCase(AdminGetListUser.fulfilled, (state, action) => {
                state.listUser = action.payload
            })
            .addCase(AdminBlockUser.fulfilled, (state, action) => {
                state.userDetail = action.payload
            })
            .addCase(AdminOpenUser.fulfilled, (state, action) => {
                state.userDetail = action.payload
            })
            ;
    }
})

export default userSlice.reducer