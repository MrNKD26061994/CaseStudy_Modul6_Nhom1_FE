import {createSlice} from "@reduxjs/toolkit";
import {
    addHouse,
    getHouses,
    addInfoHouse,
    showListHouseForUser,
    getAHouse,
    editDetailHouse, findHouseById,
    pushImage, addImages
} from "../../services/houseService";
import {closeFormEdit, getName, openFormEdit} from "../../services/houseService";
import {findUserById} from "../../services/userService";
import {countUnreadNotify, listUnReadNotify, subUnReadNotify} from "../../services/notifyService";

const initialState = {
    notify: {},
    count: 0,
    listNotify: [],

}
const notifySlice = createSlice({
    name: 'notify',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(countUnreadNotify.fulfilled,(state, action) => {
                state.count = action.payload
            })
            .addCase(listUnReadNotify.fulfilled,(state, action) => {
                state.listNotify = action.payload
            })
            .addCase(subUnReadNotify.fulfilled,(state, action) => {
                state.listNotify = state.listNotify.filter(notify => notify.id !== action.payload)
            })

    }
})
export default notifySlice.reducer