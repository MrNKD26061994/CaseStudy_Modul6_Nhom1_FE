import {createSlice} from "@reduxjs/toolkit";
import {FindListReviewByHouseID, saveAReview} from "../../services/reviewService";
const initialState = {
    aReview: {},
    listReview:[],
}
const reviewSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(saveAReview.fulfilled, (state, action) => {
                state.aReview = action.payload;
            })
            .addCase(FindListReviewByHouseID.fulfilled, (state, action) => {
                state.listReview = action.payload;
            })
        ;
    }
})
export default reviewSlice.reducer