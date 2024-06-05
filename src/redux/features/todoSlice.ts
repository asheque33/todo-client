import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { RootState } from "../store";

type TTodo = {
  id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todo: TTodo[];
};
const initialState: TInitialState = {
  todo: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TTodo>) => {
      // state.todo.push(action.payload);
      state.todo.push({ ...action.payload, isCompleted: false });
      console.log(state.todo.length - 1);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
      console.log(state.todo.length - 1);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const indexNum = state.todo.findIndex(
        (item) => item.id === action.payload
      );
      state.todo[indexNum].isCompleted = !state.todo[indexNum].isCompleted;
      if (state.todo[indexNum].isCompleted) {
        const done = state.todo[indexNum];
        state.todo.splice(indexNum, 1);
        state.todo.push(done);
      }
    },
  },
});
export const { createTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos.todo;

export default todoSlice.reducer;
