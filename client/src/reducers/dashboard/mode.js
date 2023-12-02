import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    userId:'63701cc1f03239b7f700000e'
};

export const ModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { setMode } = ModeSlice.actions
export default ModeSlice.reducer