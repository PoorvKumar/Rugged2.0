import { createSlice } from '@reduxjs/toolkit';

const products = [];

const productSlice = createSlice({
  name: 'products',
  initialState: {products:products,searchInput:""},
  reducers: {
    addProducts: (state, action) => {
        state.products=action.payload.products;
    },
    changeSearchInput:(state,action)=>{
        state.searchInput = action.payload.searchInput;
    }
  },
});

export const {addProducts,changeSearchInput} = productSlice.actions;

export default productSlice.reducer;
