import { createSlice } from "@reduxjs/toolkit"

const initialState={
userInfo:null,
isloggedIn:false,

}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        LoginSuccces:(state,action)=>{
            state.userInfo=action.payload;
            state.isloggedIn=true;
        },
        logout:(state)=>{
            state.userInfo=null;
            state.isloggedIn=false;
        },
    },
});
export const {LoginSuccces,logout}=userSlice.actions;
export default userSlice.reducer;