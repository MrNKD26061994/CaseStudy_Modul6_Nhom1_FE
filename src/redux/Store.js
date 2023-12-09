import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        users: userReducer,
        userDetail: userReducer,
        isActiveEdit: userReducer,
        nameEditOne: userReducer,
    }
})