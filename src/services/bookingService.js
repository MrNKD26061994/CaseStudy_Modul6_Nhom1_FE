import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import dayjs from "dayjs";
import {getDaysBetweenTwoDates} from "../function/function";

export const findBookingNotCheckin = createAsyncThunk(
    'get/booking/bookings/now/id',
    async (id) => {
        const res = await customAxios.get('booking/bookings/now/' + id);
        let bookings = res.data;
        let listDate = []
        bookings.forEach((item) => {
            listDate.push(...getDaysBetweenTwoDates(item.startTime, item.endTime))
        });
        return listDate;
    }
)
export const createBooking = createAsyncThunk(
    'post/booking',
    async (booking) => {
        const res = await customAxios.post('booking', booking);
        console.log(res)
        return res;
    }
)
export const getStartEndDate = createAsyncThunk(
    'booking/changeDate',
    async (date) => {
        return {startTime: date[0], endTime: date[1]};
    }
)
export const toggleCheckNextDate = createAsyncThunk(
    'booking/toggleCheckNextDate',
    async (value) => {
        return value;
    }
)