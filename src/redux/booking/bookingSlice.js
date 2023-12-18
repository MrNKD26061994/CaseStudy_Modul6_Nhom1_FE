import {createSlice} from "@reduxjs/toolkit";
import {
    CancelBookingTheHouse,
    createBooking,
    findBookingNotCheckin,
    getStartEndDate,
    toggleCheckNextDate, UserWantToSeeBookingHistory
} from "../../services/bookingService";

const initialState = {
    listDay: [],
    booking: {},
    checkNextDate: "",
    bookings:[],
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
                state.booking = {...state.booking, ...action.payload};
            })
            .addCase(toggleCheckNextDate.fulfilled, (state, action) => {
                state.checkNextDate = action.payload;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.booking = action.payload;
            })
            .addCase(UserWantToSeeBookingHistory.fulfilled, (state, action) => {
                state.bookings = action.payload;
            })
            .addCase(CancelBookingTheHouse.fulfilled, (state, action) => {
                state.booking = action.payload;
            })
        ;
    }
})

export default bookingSlice.reducer