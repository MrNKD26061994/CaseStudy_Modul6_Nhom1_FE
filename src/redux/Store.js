import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import houseReducer from "./house/houseSlice";
import bookingReducer from "./booking/bookingSlice";
import reviewReducer from "./review/reviewSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        bookings: bookingReducer,
        users: userReducer,
        userDetail: userReducer,
        isActiveEdit: userReducer,
        nameEditOne: userReducer,
        house: houseReducer,
        booking: bookingReducer,
        review: reviewReducer,
    }
})