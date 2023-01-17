import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from 'axios';


//posting the data to the file
export const postUserData = createAsyncThunk("postUserData",(user)=>axios.post("http://localhost:3003/user/user",user).then((res)=>res.data));

//getting the data from the file
export const getUsersData = createAsyncThunk("getUsersData",async ()=>await axios.get("http://localhost:3003/user/users").then((res)=>res.data));

//update the user in file
export const updateUserData = createAsyncThunk("updateUserData",async (user)=>await axios.put("http://localhost:3003/user/update/"+user.email,user).then((res)=>res.data));

//delete the user in file
export const deleteUsersData = createAsyncThunk("deleteUsersData",async (user)=>axios.delete("http://localhost:3003/user/delete/"+user.email).then(res=>res.data));


const userSlice = createSlice({
   name:'user',
   initialState:defaultState,
   reducers:{

   },
   extraReducers:(builder)=>
   {
    builder.addCase(postUserData.fulfilled,(state,action)=>{
        state.users = action.payload;
    });
    builder.addCase(getUsersData.fulfilled,(state,action)=>{
        state.users = action.payload;
    });
    builder.addCase(updateUserData.fulfilled,(state,action)=>{
        state.users = action.payload;
    });
    builder.addCase(deleteUsersData.fulfilled,(state,action)=>{
        state.users = action.payload;
    });

   }
})

export default userSlice.reducer;