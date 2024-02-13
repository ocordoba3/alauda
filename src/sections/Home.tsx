import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "/light_logo.png";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";
import { useTranslation } from "react-i18next";

export const Home = () => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();
  // Constants
  const bgColor = theme.palette.background.default;
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));

  const handleStart = () => {
    window.scrollTo({
      top: document.getElementById(SECTIONS.about)?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <Section
      id={SECTIONS.home}
      styles={{
        alignContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
        display: "grid",
        gridTemplateRows: "50% 10%",
        height: "100vh",
        position: "relative",
        zIndex: 11000,
      }}
    >
      {/* IMAGE */}
      <Box
        id="movement_element"
        style={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src={logo} alt="Alauda Logo" loading="lazy" width="40%" />
        {/* NAME */}
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          {t("title")}
        </Typography>
      </Box>

      {/* START BUTTON */}
      <Button variant="contained" onClick={handleStart}>
        {t("general.start")}
      </Button>
    </Section>
  );
};
