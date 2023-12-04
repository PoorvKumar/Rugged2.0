import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const baseURL = "http://localhost:5001/";
const orders = [
  {
    id: 1,
    products: [
      {
        id: 1,
        name: "iPhone 12 Pro",
        brand: "Apple",
        desc: "6.1-inch display",
        price: 100,
        rent: true,
        quantity: 1,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
      },
      {
        id: 2,
        name: "iPhone 12",
        brand: "Apple",
        desc: "5.4-inch mini display",
        price: 699,
        rent: false,
        quantity: 2,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
      },
      {
        id: 3,
        name: "Galaxy S",
        brand: "Samsung",
        desc: "6.5-inch display",
        rent: true,
        price: 300,
        quantity: 1,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/p/2/-original-imaguechhujc7ujh.jpeg?q=70",
      },
    ],
    price: 1638.2,
    date: "12/11/2023",
    quantity: 3,
    status: "1",
    discount: 10,
    shippingPrice: 20,
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        name: "iPhone 12 Pro",
        brand: "Apple",
        desc: "6.1-inch display",
        price: 999,
        rent: true,
        quantity: 1,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
      },
      {
        id: 2,
        name: "iPhone 12",
        brand: "Apple",
        desc: "5.4-inch mini display",
        price: 699,
        rent: false,
        quantity: 2,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
      },
    ],
    price: 2187.3,
    date: "22/11/2023",
    quantity: 2,
    status: "2",
    discount: 10,
    shippingPrice: 30,
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        name: "iPhone 12 Pro",
        brand: "Apple",
        desc: "6.1-inch display",
        price: 500,
        rent: true,
        quantity: 1,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
      },
      ],
    price:420,
    date: "25/11/2023",
    quantity: 1,
    status: "3",
    discount: 20,
    shippingPrice: 20,
  },
];

const initialState = {
    orders: orders,
    loading: false,
    error: null,
};
// export const Loginfunction = createAsyncThunk(
//   "login",
//   async (info, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(baseURL + "auth");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

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
  name: "auth",
  initialState,
    reducers: {
      
  },
  extraReducers: (builder) => {
  },
});

export default OrderSlice.reducer;
