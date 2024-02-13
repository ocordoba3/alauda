import { PaletteMode, createTheme } from "@mui/material";
import defaultColor from "./_theme-vars.module.scss";

export const colors = defaultColor;
const theme = (navType: PaletteMode) => {
  const darkMode = navType === "dark";

  return createTheme({
    palette: {
      background: {
        paper: darkMode ? colors.darkPaper : colors.paper,
        default: darkMode ? colors.darkBackground : colors.lightBackground,
      },
      common: {
        black: colors.darkPaper,
      },
      divider: darkMode ? colors.grey500 : colors.grey900,
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        dark: colors.errorDark,
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        500: colors.grey500,
        600: colors.grey900,
        700: colors.grey700,
        900: colors.grey900,
      },
      mode: navType,
      primary: {
        light: colors.primaryLight,
        main: colors.primaryMain,
        dark: colors.primaryDark,
        200: colors.primary200,
        800: colors.primary800,
      },
      secondary: {
        light: colors.secondaryLight,
        main: colors.secondaryMain,
        dark: colors.secondaryDark,
        200: colors.secondary200,
        800: colors.secondary800,
      },
      success: {
        light: colors.successLight,
        200: colors.success200,
        main: colors.successMain,
        dark: colors.successDark,
      },
      text: {
        primary: darkMode ? colors.grey50 : colors.grey900,
        secondary: darkMode ? colors.grey100 : colors.grey700,
      },
      warning: {
        light: colors.warningLight,
        main: colors.warningMain,
        dark: colors.warningDark,
      },
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
    typography: {
      fontFamily: `"Montserrat", sans-serif`,
      h1: { fontWeight: 500 },
      h2: { fontWeight: 400 },
      h3: { fontWeight: 300 },
      h4: { fontWeight: 300 },
      h5: { fontWeight: 300 },
      h6: { fontWeight: 300 },
    },
  });
};
export default theme;
