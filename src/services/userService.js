import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

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
export const edit = createAsyncThunk(
    'user/edit',
    async (date) =>{
        const res = await customAxios.put('edit', data);
        return res;
    }
)




