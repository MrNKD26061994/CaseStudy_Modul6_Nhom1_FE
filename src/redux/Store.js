import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import houseReducer from "./house/houseSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        users: userReducer,
        userDetail: userReducer,
        isActiveEdit: userReducer,
        nameEditOne: userReducer,
        house: houseReducer,
        houseDetail: houseReducer

    }
})