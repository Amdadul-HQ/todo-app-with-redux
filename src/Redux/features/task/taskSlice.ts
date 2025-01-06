import { ITask } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
    tasks:ITask[];
    filter:"all" | "high" | "medium" | "low"
}

const initialState :IInitialState = {
  tasks: [
    {
      id: "adsfasdf",
      title: "Initialize frontend",
      description: "create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter:"all"
};

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTask :(state,action :PayloadAction<ITask>) =>{
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = todoSlice.actions

export const selectTasks = (state:RootState) =>{
    return state.todo.tasks
}

export const selectFilter = (state:RootState) =>{
    return state.todo.filter
}


export default todoSlice.reducer