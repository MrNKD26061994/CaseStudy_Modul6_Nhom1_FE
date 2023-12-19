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
        const res = await customAxios.put('house/' + data.id ,data);
        return res;
    }
)
export const getName = createAsyncThunk(
    'house/getName',
    async (name) => {
        return name;
    }
)
export const findHouseById =createAsyncThunk(
    'get/house/id',
    async (id) => {
        const res = await customAxios.get('house/' + id);
        return res;
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

