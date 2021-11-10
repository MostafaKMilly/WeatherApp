import { Add } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllTodos } from "../../redux/slices/todosSlice";
import AddTodo from "../modals/AddTodo";
import EditTodo from "../modals/EditTodo";
import TodosCategories from "./TodosCategories";
import TodosList from "./TodosList";

function TodosSection(props) {
  const [addTodoDialogIsOpen, setAddTodoDialogIsOpen] = React.useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [editTodoDialogIsOpen, setEditTodoDialogIsOpen] = useState(false);
  let todos = useSelector(selectAllTodos);
  let archives = useSelector((state) => state.todos.archives);
  let showArchives = useSelector((state) => state.global.showArchives);

  return (
    <>
      <Box mt={4}>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <TodosCategories />
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <Typography
              variant="h5"
              component="span"
              color="textSecondary"
              fontWeight="600"
            >
              Todos List
            </Typography>
            <IconButton
              color="primary"
              sx={{
                float: "right",
              }}
              onClick={() => setAddTodoDialogIsOpen(true)}
            >
              <Add />
            </IconButton>
            <TodosList
              setSelectedTodo={setSelectedTodo}
              setOpen={setEditTodoDialogIsOpen}
              todos={showArchives ? archives : todos}
            />
          </Grid>
        </Grid>
      </Box>
      <AddTodo open={addTodoDialogIsOpen} setOpen={setAddTodoDialogIsOpen} />
      <EditTodo
        open={editTodoDialogIsOpen}
        setOpen={setEditTodoDialogIsOpen}
        todoId={selectedTodo}
      />
    </>
  );
}

export default TodosSection;
