import React from 'react';
import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
export const saveAReview = createAsyncThunk(
    '/review/',
    async (review) => {
        const res = await customAxios.post('review/',review);
        return res;
    }
)

export const FindListReviewByHouseID = createAsyncThunk(
    '/review/FindListReviewByHouseID',
    async (id) => {
        const res = await customAxios.post('review/FindListReviewByHouseID/'+id);
        return res;
    }
)