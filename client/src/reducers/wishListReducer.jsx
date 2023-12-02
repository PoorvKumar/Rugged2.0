import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const wishListReducer=createSlice({
    name:'wishlist',
    initialState :{
        wishlist:[],
        
        
},

reducers:{
    addToWishlist:
        (state,action)=>{
            state.wishlist.push(action.payload);
            

        },
    removeFromWishlist:(state,action)=>{
        let ind=state.wishlist.indexOf(action.payload);
        state.wishlist.splice(ind,1);
        
    }
    
}
}
)
 
export const{addToWishlist,removeFromWishlist}=wishListReducer.actions;
export default wishListReducer.reducer;
