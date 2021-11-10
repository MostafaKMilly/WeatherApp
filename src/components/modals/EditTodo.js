import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { editTodo, selectAllTodos } from "../../redux/slices/todosSlice";
import DialogLayout from "../layouts/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

function EditTodo(props) {
  const { control, handleSubmit } = useForm();
  const todo = useSelector(selectAllTodos).filter(
    (todo) => todo.id === props.todoId
  )[0];

  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={editTodo}
      handleSubmit={handleSubmit}
      todoId={props.todoId}
      iconName={"edit"}
      activityName={"Edit todo"}
    >
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <CustomTextField
            label="Title"
            variant="standard"
            size="large"
            required={true}
            fullWidth
            defaultValue={todo.title}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="checked"
        render={({ field }) => (
          <CustomTextField
            label="Checked"
            select
            variant="standard"
            size="large"
            fullWidth
            required
            defaultValue={todo.checked}
            SelectProps={{
              native: true,
            }}
            {...field}
          >
            <option>{"false"}</option>
            <option>{"true"}</option>
          </CustomTextField>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <CustomTextField
            label="description"
            multiline
            rows={2}
            variant="standard"
            size="large"
            defaultValue={todo.description}
            fullWidth
            required
            SelectProps={{
              native: true,
            }}
            {...field}
          />
        )}
      />
    </DialogLayout>
  );
}

export default EditTodo;
