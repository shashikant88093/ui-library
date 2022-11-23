import {    combineReducers } from "@reduxjs/toolkit";
import tableDataSlice from './customTableStore/customTableReducer'
export const store =combineReducers({
    tableData: tableDataSlice.reducer,
})