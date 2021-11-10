import React from "react";
import { Controller, useForm } from "react-hook-form";
import { addTodo } from "../../redux/slices/todosSlice";
import DialogLayout from "../layouts/DialogLayout";
import CustomTextField from "../UI/CustomTextField";

function AddTodo(props) {
  const { control, handleSubmit } = useForm();
  return (
    <DialogLayout
      open={props.open}
      setOpen={props.setOpen}
      handleActitvty={addTodo}
      handleSubmit={handleSubmit}
      iconName={"fact_check"}
      activityName={"Add todo"}
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

export default AddTodo;
