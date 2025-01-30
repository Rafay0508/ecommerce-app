import { combineReducers } from "@reduxjs/toolkit";
import { todoData } from "./slices/Todo";

const rootReducers = combineReducers({
    todoData: todoData
});

export default rootReducers;