import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  BlogDetails:{},
  setDashboard:{}
};

const billBoardSlice = createSlice({
  name: "billBoard",
  initialState,
  reducers: {
    setBillboardData: (state, { payload }) => {
        state.data = payload;
    },
    BlogDetails: (state, { payload }) => {
      state.BlogDetails = payload;
  },
  setDashboard: (state, { payload }) => {
    state.setDashboard = payload;
},
  },
  extraReducers: {},
});

export const { setBillboardData ,BlogDetails,setDashboard,} = billBoardSlice.actions;

export default billBoardSlice.reducer;
