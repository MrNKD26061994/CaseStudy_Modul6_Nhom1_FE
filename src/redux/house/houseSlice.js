import {createSlice} from "@reduxjs/toolkit";
import {
    addHouse,
    getHouses,
    addInfoHouse,
    showListHouseForUser,
    getAHouse,
    editDetailHouse, findHouseById,
    pushImage
} from "../../services/houseService";
import {closeFormEdit, getName, openFormEdit} from "../../services/userService";
import {findUserById} from "../../services/userService";

const initialState = {
    house: [],
    images: [],
    houseDetail: {},
    isActiveEdit: false,
    nameEditOne: "",
}
const houseSlice = createSlice({
    name: 'house',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(openFormEdit.fulfilled, (state) => {
                state.isActiveEdit = true;
            })
            .addCase(closeFormEdit.fulfilled, (state) => {
                state.isActiveEdit = false;
            })
            .addCase(getName.fulfilled, (state, action) => {
                state.nameEditOne = action.payload;
            })
            .addCase(getHouses.fulfilled,(state, action) => {
                state.house = action.payload
            })
            .addCase(addHouse.fulfilled,(state, action) => {
                state['house'].push(action.payload);
            })
            .addCase(addInfoHouse.fulfilled,(state, action) => {
                state.house = action.payload
                state.isActiveEdit = false
                state.nameEditOne = ""
            })
            .addCase(editDetailHouse.fulfilled,(state, action) => {
                state.houseDetail = action.payload.data
                state.isActiveEdit = false;
            })
            .addCase(findHouseById.fulfilled, (state, action) => {
                state.houseDetail = action.payload.data
            })
            .addCase(pushImage.fulfilled, (state, action) => {
                state.images = action.payload;
            })
            .addCase(showListHouseForUser.fulfilled,(state, action) => {
                state.houses = action.payload
            })
            .addCase(getAHouse.fulfilled,(state, action) => {
                state.houseDetail = action.payload
            })

    }
})
export default houseSlice.reducer