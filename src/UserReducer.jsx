import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


export const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        
    }
})
