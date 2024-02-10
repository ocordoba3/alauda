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
      divider: darkMode ? colors.darkTextPrimary : colors.grey200,
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        dark: colors.errorDark,
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        500: darkMode ? colors.darkTextSecondary : colors.grey500,
        600: darkMode ? colors.darkTextTitle : colors.grey900,
        700: darkMode ? colors.darkTextPrimary : colors.grey700,
        900: darkMode ? colors.darkTextPrimary : colors.grey900,
      },
      mode: navType,
      primary: {
        light: darkMode ? colors.darkPrimaryLight : colors.primaryLight,
        main: darkMode ? colors.darkPrimaryMain : colors.primaryMain,
        dark: darkMode ? colors.darkPrimaryDark : colors.primaryDark,
        200: darkMode ? colors.darkPrimary200 : colors.primary200,
        800: darkMode ? colors.darkPrimary800 : colors.primary800,
      },
      secondary: {
        light: darkMode ? colors.darkSecondaryLight : colors.secondaryLight,
        main: darkMode ? colors.darkSecondaryMain : colors.secondaryMain,
        dark: darkMode ? colors.darkSecondaryDark : colors.secondaryDark,
        200: darkMode ? colors.darkSecondary200 : colors.secondary200,
        800: darkMode ? colors.darkSecondary800 : colors.secondary800,
      },
      success: {
        light: colors.successLight,
        200: colors.success200,
        main: colors.successMain,
        dark: colors.successDark,
      },
      text: {
        primary: darkMode ? colors.darkTextPrimary : colors.grey700,
        secondary: darkMode ? colors.darkTextSecondary : colors.grey500,
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
