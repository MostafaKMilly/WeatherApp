import { WbSunny } from "@mui/icons-material";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomSwitch from "../UI/CustomSwitch";

function Layout(props) {
  return (
    <Box>
      <CssBaseline />
      <AppBar color="default" position="fixed" elevation={0}>
        <Toolbar
          component={Container}
          maxWidth="lg"
          sx={{ justifyContent: "center" }}
        >
          <Box display="contents">
            <Typography variant="h4" fontWeight="600" mr={1}>
              Weather App
            </Typography>
            <WbSunny color="primary" fontSize="large" />
          </Box>
          <Box position="absolute" left={0}>
            <CustomSwitch />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Toolbar></Toolbar>
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
