import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  // toggletabs: false,
  IsPage:null,
  Alluser:{}
};
const authSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setUSerData: (state, { payload }) => {
      state.data = payload;
    },
    setPage: (state, { payload }) => {
      state.IsPage = payload;
    },
    Alluser: (state, { payload }) => {
      state.Alluser = payload;
    },
  },
  extraReducers: {},
});

export const { setUSerData,setPage,Alluser } = authSlice.actions;

export default authSlice.reducer;
