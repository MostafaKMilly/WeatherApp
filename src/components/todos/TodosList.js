/* eslint-disable */
import { Archive, Check, Clear, Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  archiveTodo,
  deleteTodo,
  fetchTodos,
} from "../../redux/slices/todosSlice";

function TodosList(props) {
  const isLoading = useSelector((state) => state.todos.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Typography>Loading ...</Typography>;
  }
  return (
    <Box mt={2}>
      <List>
        {props.todos.map((todo) => (
          <ListItem
            key={todo.id}
            alignItems="flex-start"
            component={Paper}
            variant="outlined"
            secondaryAction={
              !todo.archivedAt ? (
                <Box
                  display="flex"
                  sx={{
                    flexDirection: {
                      md: "row",
                      xs: "column",
                    },
                  }}
                  gap={1}
                >
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      props.setOpen(true);
                      props.setSelectedTodo(todo.id);
                    }}
                  >
                    <Edit color="info" />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    <Delete color="error" />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => dispatch(archiveTodo(todo.id))}
                  >
                    <Archive color="success" />
                  </IconButton>
                </Box>
              ) : (
                <></>
              )
            }
            sx={{ mb: 2 }}
          >
            <ListItemText
              primary={todo.title}
              secondary={
                <>
                  <Typography variant="body2" color="text.primary">
                    {todo.description}
                  </Typography>
                  <Box display="flex" gap={1} alignItems="center" mt={1}>
                    <Typography variant="body2" color="text.primary">
                      status : {todo.checked}
                    </Typography>
                    {todo.checked ? (
                      <Check color="text.primary" />
                    ) : (
                      <Clear color="text.primary" />
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    sx={{ mt: 1 }}
                  >
                    Finshed At : {todo.finshedAt}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    sx={{ mt: 1 }}
                  >
                    Created At : {todo.createdAt}
                  </Typography>
                  {todo.archivedAt ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={600}
                      sx={{ mt: 1 }}
                    >
                      Archived At : {todo.archivedAt}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodosList;
