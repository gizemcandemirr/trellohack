import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo{
   
    title:string;
    completed:boolean;
}

const initialState:Todo[] = [];

const todoSlice= createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action: PayloadAction<string>)=>{
            const newTodo={ title:action.payload, completed:false};
            state.push(newTodo)
        },
        remove:(state,action: PayloadAction<string>)=>{
            return state.filter((todo) => todo.id !==action.payload)
        }
    }
})

export default todoSlice.reducer;
export const {add,remove} = todoSlice.actions;