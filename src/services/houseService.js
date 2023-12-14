import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getHouses = createAsyncThunk(
    'house/house',
    async (id) => {
        const res = await customAxios.get('house/houses/' + id);
        console.log("AAAA", res)
        return res;
    }
)
export const addHouse = createAsyncThunk(
    'house/addHouse',
    async (data) => {
        const res = await customAxios.post('house', data);
        console.log("AAAAAAAAAAAA",res.data)
        return res.data;
    }
)
export const addInfoHouse = createAsyncThunk(
    'add/info',
    async (data) => {
        console.log(data)
        return data;
    }
)
export const openFormEdit = createAsyncThunk(
    'house/openFormEdit',
    async () => {
    }
)
export const closeFormEdit = createAsyncThunk(
    'house/closeFormEdit',
    async () => {
    }
)
export const editDetailHouse = createAsyncThunk(
    'house/edit',
    async (data) => {
        const res = await customAxios.put('house' + data.id ,data);
        return res;
    }
)
export const getName = createAsyncThunk(
    'house/getName',
    async (name) => {
        return name;
    }
)