import {createSlice} from "@reduxjs/toolkit";
import {
    getABooking,
    updateStartTimeAndEndTimeOfABooking,
} from "../../services/bookingService";

const initialState = {
    bookings: [],
    aBooking: {},
}
const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getABooking.fulfilled,(state, action) => {
                state.aBooking = action.payload
            })
            .addCase(updateStartTimeAndEndTimeOfABooking.fulfilled,(state, action) => {
                state.aBooking = action.payload
            })

    }
})
export default bookingSlice.reducer