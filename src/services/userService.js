import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await customAxios.post('login', data);
        return res;
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async () => {
    }
)
export const openFormEdit = createAsyncThunk(
    'user/openFormEdit',
    async () => {
    }
)
export const closeFormEdit = createAsyncThunk(
    'user/closeFormEdit',
    async () => {
    }
)
export const getName = createAsyncThunk(
    'user/getName',
    async (name) => {
        return name;
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data) => {
        const res = await customAxios.post('register', data);
        return res;
    }
)
export const editDetailUser = createAsyncThunk (
    'user/edit',
    async (data) => {
        const res = await customAxios.put('users/' + data.id, data);
        return res;
    }
)
export const editPasswordUser = createAsyncThunk (
    'user/editPassword',
    async (data) => {
        const res = await customAxios.put('api/changePassword/' + data.id, data);
        return res;
    }
)
export const findUserById = createAsyncThunk (
    'user/findById',
    async (id) => {
        const res = await customAxios.get('users/' + id);
        return res;
    }
)
export const checkRegistration = createAsyncThunk (
    'user/registration',
    async (token) => {
        const res = await customAxios.get(`api/registrationConfirm?token=` + token);
        return res;
    }
)
export const checkEmail = (email) => {
    let res = customAxios.get(`api/checkEmail/` + email)
    return res;
}
export const checkUsername = (username) => {
    let res = customAxios.get(`api/checkUsername/` + username)
    return res;
}




