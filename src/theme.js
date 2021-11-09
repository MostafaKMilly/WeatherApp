import { createTheme, responsiveFontSizes } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: "#548ca8",
      light: "#85bcda",
      dark: "#205f79",
    },
    secondary: {
      main: "#476072",
      light: "#748da1",
      dark: "#1c3647",
    },
  },
  typography: {
    fontFamily: "Cairo",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "0.957rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            fontFamily: "Cairo",
          },
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#548ca8",
            },
          },
        },
        {
          props: { variant: "standard" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#548ca8",
            },
            "& .MuiInputBase-root:hover": {
              borderBottomColor: "#548ca8 !important",
            },
          },
        },
      ],
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontSize: "1.0rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px 7px 7px 7px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [breakpoints.up("sm")]: {
            "@media all": {
              minHeight: 67,
            },
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);