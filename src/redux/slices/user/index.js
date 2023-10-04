import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
       user:{
        name : null,
        email : null,
        password : null,
        resume : null
       }
    },
    reducers:{
        loginUser: (state, action)=>{
            // console.log(action.payload)
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            console.log("state", state.user.name,
            state.user.email,
            state.user.password)
        },
        signOutUser: (state, action)=>{
            state.user.email = null;
            state.user.password = null;
            state.user.name = null;
            state.user.resume = null;

        },
        updateResume: (state, action)=>{
            console.log(action.payload)
            state.user.resume = action.payload;
            console.log("state", state.user.name,
            state.user.email,
            state.user.password)
            console.log("state resume",state.user.resume)
        }
    }
})

export const {loginUser, signOutUser, updateResume} = userSlice.actions; 
export default userSlice.reducer;