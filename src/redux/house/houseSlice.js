import {createSlice} from "@reduxjs/toolkit";
import {addHouse, getHouses, addInfoHouse, editDetailHouse} from "../../services/houseService";
import {closeFormEdit, openFormEdit, getName} from "../../services/houseService";

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

    }
})
export default houseSlice.reducer