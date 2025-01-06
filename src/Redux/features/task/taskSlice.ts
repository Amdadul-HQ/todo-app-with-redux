import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task:ITask[]
}

const initialState :IInitialState = {
  task: [
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


export default todoSlice.reducer