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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
