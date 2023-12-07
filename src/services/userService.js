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
export const register = createAsyncThunk(
    'user/register',
    async (data) => {
        const res = await customAxios.post('register', data);
        return res;
    }
)
// export const getListUser = () => {
//     // return customAxios.get('admin/users');
// }

export const getListUser = createAsyncThunk(
    'admin/listUser',
    async (data) => {
        const res = await customAxios.get('admin/users');
        // console.log(res.data)
        return res;
    }
)