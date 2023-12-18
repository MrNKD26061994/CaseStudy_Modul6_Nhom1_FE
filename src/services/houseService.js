import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getHouses = createAsyncThunk(
    'house/house',
    async (id) => {
        const res = await customAxios.get('house/houses/' + id);
        return res;
    }
)
export const addHouse = createAsyncThunk(
    'house/addHouse',
    async (data) => {
        const res = await customAxios.post('house', data);
        return res.data;
    }
)
export const addInfoHouse = createAsyncThunk(
    'add/info',
    async (data) => {
        return data;
    }
)

export const showListHouseForUser = createAsyncThunk(
    '/get/house/houses',
    async (data) => {
        const res = await customAxios.get('house/houses');
        return res.data.content;
    }
)
export const getAHouse = createAsyncThunk(
    '/get/house/houses/{id}',
    async (id) => {
        const res = await customAxios.get('house/houses/'+id);
        return res.data;
    }
)