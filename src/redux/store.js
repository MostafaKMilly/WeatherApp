import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice";
import globalReducer from "./slices/globalSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
    global: globalReducer,
  },
});

export default store;
