import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { RootState } from "../store";

type TTodo = {
  _id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TTodo>) => {
      // state.todo.push(action.payload);
      state.todos.push({ ...action.payload, isCompleted: false });

      // console.log(state.todo.length - 1);
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      const indexNum = state.todos.findIndex(
        (item) => item._id === action.payload._id
      );
      if (indexNum !== -1) {
        state.todos[indexNum] = { ...state.todos[indexNum], ...action.payload };
      } else {
        console.log("Item not found", action.payload._id);
        return;
      }
      // console.log(state.todo.length - 1);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const indexNum = state.todos.findIndex(
        (item) => item._id === action.payload
      );
      state.todos[indexNum].isCompleted = !state.todos[indexNum].isCompleted;
      if (state.todos[indexNum].isCompleted) {
        const done = state.todos[indexNum];
        state.todos.splice(indexNum, 1);
        state.todos.push(done);
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item._id !== action.payload);
      // console.log(state.todo.length - 1);
    },
  },
});
export const selectedTodos = (state: RootState) => state.todos.todos;
export const { createTodo, updateTodo, removeTodo, toggleCompleted } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
