import { createSlice } from "@reduxjs/toolkit";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

export const userSlice=createSlice({
    name: "user",
    initialState:{
    user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
    },
});
export const{login,logout} = userSlice.actions;
export const user = initializeUseSelector((state) => state.User.user);
export default userSlice.reducer;

