import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const todosData = (state: RootState) => state.todoData;
export const todos = createSelector(todosData, (state: any) => state.todos)