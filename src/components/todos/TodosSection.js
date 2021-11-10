import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TodosCategories from "./TodosCategories";
import TodosList from "./TodosList";

function TodosSection(props) {
  return (
    <Box mt={4}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <TodosCategories />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h5" color="textSecondary" fontWeight="600">
            Todos List
          </Typography>
          <TodosList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TodosSection;
