import { createSlice } from "@reduxjs/toolkit";
import TODOS from "../../shared/todos";

const initialState = {
  items: [],
  archives: [],
  isLoading: true,
  errMess: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    getTodosFailed: (state, action) => {
      state.isLoading = false;
      state.errMess = action.payload;
    },
    addTodo: {
      reducer: (state, action) => {
        const id =
          state.items.length === 0
            ? 1
            : state.items[state.items.length - 1].id + 1;

        state.items.push({ ...action.payload, id });
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            checked: data.checked === "true",
            createdAt: new Date().toISOString().split("T")[0],
            finshedAt:
              data.checked === "true"
                ? new Date().toISOString().split("T")[0]
                : undefined,
          },
        };
      },
    },

    editTodo: {
      reducer: (state, action) => {
        const id = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[id] = {
          ...state.items[id],
          ...action.payload,
        };
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            checked: data.checked === "true",
            finshedAt:
              data.checked === "true"
                ? new Date().toISOString().split("T")[0]
                : undefined,
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    archiveTodo: (state, action) => {
      let todo = state.items.filter((item) => item.id === action.payload)[0];
      state.archives.push({
        ...todo,
        archivedAt: new Date().toISOString().split("T")[0],
      });
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  getTodos,
  getTodosFailed,
  addTodo,
  editTodo,
  deleteTodo,
  archiveTodo,
} = todosSlice.actions;
export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.items;

export const fetchTodos = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getTodos(TODOS));
  }, 1000);
};
