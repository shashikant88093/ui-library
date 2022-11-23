import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import CustomTableDatas from "../../jsonData/CustomTableDatas.json";
import axios from 'axios'
export const getTableData = createAsyncThunk(
  "table/getData",
  (arg, { rejectWithValue }) => {
    try {
      const {data} = axios.get("http://localhost:3003/users");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

// export const tableDataSlice = createReducer()

const tableDataSlice = createSlice({
  name: "table",
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getTableData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getTableData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getTableData.rejected]: (state, { payload }) => {
      state.loading = true;
      state.isSuccess = false;
      state.message = payload;
    },
  },
});

export default tableDataSlice;
