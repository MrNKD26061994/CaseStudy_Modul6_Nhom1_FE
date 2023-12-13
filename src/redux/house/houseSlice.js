import {createSlice} from "@reduxjs/toolkit";
import {addHouse, getHouses} from "../../services/houseService";

const initialState = {
    house: []
}
const houseSlice = createSlice({
    name: 'house',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getHouses.fulfilled,(state, action) => {
                state.house = action.payload
            })
            .addCase(addHouse.fulfilled,(state, action) => {
                state.house.push(action.payload)
            })
    }
})
export default houseSlice.reducer