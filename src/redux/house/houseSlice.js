import {createSlice} from "@reduxjs/toolkit";
import {addHouse, getHouses} from "../../services/houseService";
import {addInfoHouse, getHouses} from "../../services/houseService";
import {closeFormEdit, getName, openFormEdit} from "../../services/userService";

const initialState = {
    house: [],
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
                state.house.push(action.payload)
            })
            .addCase(addInfoHouse.fulfilled,(state, action) => {
                state.house = action.payload
                state.isActiveEdit = false
                state.nameEditOne = ""
            })

    }
})
export default houseSlice.reducer