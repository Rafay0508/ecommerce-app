import { createSlice } from "@reduxjs/toolkit";

export type todoType = {
    todos: any;
};

const initialState: todoType = {
    todos: [],
};

const todoSlicer = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setTodos(state, action) {
            state.todos = [...state.todos, action.payload]
        },
    },
});

export const todoData = todoSlicer.reducer
export const { setTodos } = todoSlicer.actions