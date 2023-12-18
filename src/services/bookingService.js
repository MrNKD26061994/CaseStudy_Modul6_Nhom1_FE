import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
export const getABooking = createAsyncThunk(
    'booking/{id}',
    async (id) => {
        const res = await customAxios.get('booking/' + id);
        return res;
    }
)

export const updateStartTimeAndEndTimeOfABooking = createAsyncThunk(
    'booking/updateStartTimeAndEndTimeOfABooking',
    async (booking) => {
        const res = await customAxios.put('booking/updateStartTimeAndEndTimeOfABooking' + booking);
        return res;
    }
)

