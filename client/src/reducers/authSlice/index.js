import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5001/";

const initialState = {
    userId: null,
    isLoggedIn: false,
    firstName: '',
    lastName: '',

    loading: false,
    error: null,
};
export const Loginfunction = createAsyncThunk(
  "login",
  async (info, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL + "auth");
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
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Loginfunction.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(Loginfunction.fulfilled, (state) => {
          state.loading = false;
          
      });
      .addCase(Loginfunction.rejected, (state) => {
        state.loading = true;
      })
  },
});

export default AuthSlice.reducer;
