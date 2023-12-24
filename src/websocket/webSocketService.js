import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../services/api";

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await customAxios.post('login', data);
        return res;
    }
)