import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import houseReducer from "./house/houseSlice";
import bookingReducer from "./booking/bookingSlice";
import webSocketReducer from "../websocket/webSocketSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        house: houseReducer,
        bookings: bookingReducer,
        webSocket: webSocketReducer,

        users: userReducer,
        userDetail: userReducer,
        isActiveEdit: userReducer,
        nameEditOne: userReducer,
        booking: bookingReducer,
    },

})