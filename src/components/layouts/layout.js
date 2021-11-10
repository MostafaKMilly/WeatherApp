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
import { useDispatch } from "react-redux";
import { toggleMode } from "../../redux/slices/globalSlice";
import CustomSwitch from "../UI/CustomSwitch";

function Layout(props) {
  const dispatch = useDispatch();
  return (
    <Box>
      <CssBaseline />
      <AppBar color="default" enableColorOnDark position="fixed" elevation={0}>
        <Toolbar
          component={Container}
          maxWidth="lg"
          sx={{ justifyContent: "center" }}
        >
          <Box display="contents">
            <Typography component="h5" variant="h4" fontWeight="600" mr={1}>
              Weather App
            </Typography>
            <WbSunny color="primary" fontSize="large" />
          </Box>
          <Box position="absolute" left={0}>
            <CustomSwitch onChange={() => dispatch(toggleMode())} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Toolbar></Toolbar>
        <Container maxWidth="md">{props.children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
