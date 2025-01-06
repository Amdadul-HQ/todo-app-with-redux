import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
    tasks:ITask[]
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
};

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{

    }
})

export const selectTasks = (state:RootState) =>{
    return state.todo.tasks
}


export default todoSlice.reducer