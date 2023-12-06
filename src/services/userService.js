import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

const user = JSON.parse(localStorage.getItem('user'))
const TOKEN = user?.accessToken;
// console.log(TOKEN)
let axiosConfig = {
    header: {
        Authorization: `Bearer ` + TOKEN
    }
}

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await customAxios.post('login', data);
        return res;
    }
)

export const logout = createAsyncThunk (
    'user/logout',
    async () => {
    }
)
export const register = createAsyncThunk (
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
        // console.log("Kết quả trả về của edit",  res)
        return res;
    }
)
export const editPasswordUser = createAsyncThunk (
    'user/editPassword',
    async (data) => {
        const res = await customAxios.put('users/changePassword/' + data.id, data);
        console.log("Kết quả trả về của change password",  res)
        return res;
    }
)
export const findUserById = createAsyncThunk (
    'user/findById',
    async (id) => {
        const res = await customAxios.get('users/' + id);
        // console.log("Kết quả trả về của user",  res)
        return res;
    }
)



