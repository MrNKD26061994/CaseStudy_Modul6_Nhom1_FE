import {createSlice} from "@reduxjs/toolkit";
import {
    createBooking,
    findBookingNotCheckin, getABooking,
    getStartEndDate,
    toggleCheckNextDate, updateBooking
} from "../../services/bookingService";

const initialState = {
    listDay: [],
    booking: {},
    checkNextDate: "",
    // booking: {startTime: new Date()},
}

const bookingSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(findBookingNotCheckin.fulfilled, (state, action) => {
                state.listDay = action.payload;
            })
            .addCase(getStartEndDate.fulfilled, (state, action) => {
                console.log(state.booking)
                // console.log({...state.booking, ...action.payload})
                state.booking.data = {...state.booking, ...action.payload};
            })
            .addCase(toggleCheckNextDate.fulfilled, (state, action) => {
                state.checkNextDate = action.payload;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.booking = action.payload;
            })
            .addCase(updateBooking.fulfilled, (state, action) => {
                state.booking = action.payload;
            })
            .addCase(getABooking.fulfilled, (state, action) => {
                state.booking = action.payload;
            })
        ;
    }
})

export default bookingSlice.reducer