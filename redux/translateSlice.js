import { createSlice } from "@reduxjs/toolkit";
const translateSlice = createSlice({
    name: "translate",
    initialState: {
        translateX: 0,
        translateY: 0,
    },
    reducers: {
        handleTranslate: (state, action) => {
            (state.translateX = action.payload.tX),
                (state.translateY = action.payload.tY);
        },
    },
});
export const { handleTranslate } = translateSlice.actions;
export default translateSlice.reducer;
