import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'data',
    initialState: {
        prev: [],
        savedChats:[] // Array to store tasks
      },
    reducers:{
        addData:(state,action)=>{
        
            state.prev = [...state.prev, action.payload];
            
        },
        saveChat: (state) => {
            if (state.prev.length > 0) {
              state.savedChats.push(state.prev); 
              console.log(state.savedChats);
              
              state.prev = [];
            }
          },
          loadChat: (state, action) => {
            state.prev = action.payload; // Load the selected chat
          },
          clearChat: (state) => {
            state.prev = []; // Clear the current chat without saving
          },
    }
})
export const {addData ,saveChat,loadChat,clearChat} = dataSlice.actions
export default  dataSlice.reducer