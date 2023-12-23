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

const initialState = {
    notify: {},

}
const notifySlice = createSlice({
    name: 'notify',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(addImages.fulfilled,(state, action) => {
                state['images'].concat(action.payload);
            })

    }
})
export default notifySlice.reducer