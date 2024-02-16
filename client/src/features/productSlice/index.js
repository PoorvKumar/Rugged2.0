import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5001/";

const initialState = {
  products: [],
  loading: false,
  error: null,
};
export const AddProduct = createAsyncThunk(
  "product/Addproduct",
  async (order, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL + "order", order);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL + "product");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getProduct",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL + "product/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(baseURL + "product/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// export const updateOrder = createAsyncThunk(
//   "product/updateOrder",
//   async (todo, { rejectWithValue }) => {
//     try {
//       const { _id, task, author, isComplete, date, uid } = todo;

//       const response = await axios.put(baseURL + "order/" + _id, {
//         task,
//         author,
//         isComplete,
//         date,
//         uid,
//       });
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );
const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(AddProduct.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming action.payload is the ID of the deleted order
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default OrderSlice.reducer;
