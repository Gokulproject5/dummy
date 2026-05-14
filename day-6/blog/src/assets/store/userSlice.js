import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState: [{
        username:"gokul",
        password:"pass123",
        fullname:"gokulakrishnan",
        role:"developer"
    }],
    reducers : {
        islogged(state , action){

        },
        currentUser(state,action){

        }
    }
})

export default userSlice.reducer

export let {islogged , currentUser} = userSlice.actions