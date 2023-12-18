import {createSlice} from "@reduxjs/toolkit";
import {addHouse, getHouses, addInfoHouse, showListHouseForUser, getAHouse} from "../../services/houseService";
import {closeFormEdit, getName, openFormEdit} from "../../services/userService";

const initialState = {
    house: [],
    houseDetail: {},
    isActiveEdit: false,
    nameEditOne: "",
    houses:[],
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
            .addCase(showListHouseForUser.fulfilled,(state, action) => {
                state.houses = action.payload
            })
            .addCase(getAHouse.fulfilled,(state, action) => {
                state.houseDetail = action.payload
            })

    }
})
export default houseSlice.reducer