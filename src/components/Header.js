import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Header(props) {
  return (
    <Container maxWidth={"md"}>
      <Box
        component={Paper}
        sx={{ backgroundColor: "secondary.light", mt: 4, p: 5 }}
        elevation={13}
      >
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} md={6}>
            <Typography>Test</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="assets\images\undraw_weather_re_qsmd.svg"
              alt="weather"
              style={{ maxWidth: "90%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Header;
