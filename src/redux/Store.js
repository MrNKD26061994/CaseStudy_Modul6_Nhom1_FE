import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import houseReducer from "./house/houseSlice";
import bookingReducer from "./booking/bookingSlice";
import webSocketReducer from "../websocket/webSocketSlice";
import notifyReducer from "./notify/notifySlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        house: houseReducer,
        bookings: bookingReducer,
        webSocket: webSocketReducer,
        notify: notifyReducer,

        users: userReducer,
        userDetail: userReducer,
        isActiveEdit: userReducer,
        nameEditOne: userReducer,
        booking: bookingReducer,
    },

})