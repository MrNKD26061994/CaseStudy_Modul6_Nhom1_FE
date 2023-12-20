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
        return res.data;
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

export const UserWantToSeeBookingHistory = createAsyncThunk(
    'booking/UserWantToSeeBookingHistory',
    async (userID) => {
        const res = await customAxios.post('booking/UserWantToSeeBookingHistory' , userID);
        return res;
    }
)
export const CancelBookingTheHouse = createAsyncThunk(
    'booking/CancelBookingTheHouse',
    async (booking) => {
        const res = await customAxios.put('booking/CancelBookingTheHouse' , booking);
        return res;
    }
)
export const ShowListBookingOfTheOwner = createAsyncThunk(
    'booking/ShowListBookingOfTheOwner',
    async (user) => {
        const res = await customAxios.post('booking/ShowListBookingOfTheOwner' , user);
        return res;
    }
)
export const OwnerCheckIn = createAsyncThunk(
    'booking/OwnerCheckIn',
    async (booking) => {
        const res = await customAxios.put('booking/OwnerCheckIn' , booking);
        return res;
    }
)
export const OwnerCheckOut = createAsyncThunk(
    'booking/OwnerCheckOut',
    async (booking) => {
        const res = await customAxios.put('booking/OwnerCheckOut' , booking);
        return res;
    }
)