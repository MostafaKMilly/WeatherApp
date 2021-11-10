import { createTheme, responsiveFontSizes } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const getTheme = (isDarkMode) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#548ca8",
        light: "#85bcda",
        dark: "#205f79",
      },
      mode: isDarkMode ? "dark" : "light",
      secondary: {
        main: "#476072",
        light: "#748da1",
        dark: "#1c3647",
      },
      info: {
        main: "#334257",
        light: "#5e6d84",
        dark: "#0a1c2e",
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
  return responsiveFontSizes(theme);
};

export default getTheme;
