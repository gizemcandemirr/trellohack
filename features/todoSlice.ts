import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface Todo{
    id: any;
    title: string,
   
}

const initialState:Todo[] = [];
function createGuidId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
const todoSlice= createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action: PayloadAction<string>)=>{
            const newTodo={id:createGuidId(), title:action.payload};
            state.push(newTodo)
        },
        remove:(state,action: PayloadAction<string>)=>{
            return state.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer;
export const {add,remove} = todoSlice.actions;