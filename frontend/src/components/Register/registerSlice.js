import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    password:"",
    name:"",
    email:"",
    mobile:"",
    isAuthenticated:false
}

const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        createUser:{
            prepare(username,password,name,email,mobile){
                return{
                    payload:{
                        username,password,name,email,mobile
                    }
                }
            },
            reducer(state,action){
                state.username = action.payload.username;
                state.password = action.payload.password;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.mobile = action.payload.mobile;
            }
        },
        setAuthentication(state){
            state.isAuthenticated = true;
        }
    }
});

export const {createUser,setAuthentication} = registerSlice.actions;
// console.log(createUser);

export default registerSlice.reducer;