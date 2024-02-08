import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#669bbc",
    },
    secondary: {
      main: "#f2e9e4",
    },
    background: { default: "#14213d" },
    text: { primary: "#e5e5e5" },
  },
  // components: {
  //   MuiLink: {
  //     styleOverrides: {
  //       button: {
  //         color: "#fff",
  //       },
  //     },
  //   },
  // },
});

export default theme;
