import { Box, Button, Typography, useTheme } from "@mui/material";
import { Section } from "../components/Section";
import { SECTIONS } from "../utils/constants";
import { useTranslation } from "react-i18next";
import logo from "../assets/light_logo.webp";

export const Home = () => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();
  // Constants
  const bgColor = theme.palette.background.default;

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
        <img
          alt="Alauda Logo"
          height="auto"
          loading="lazy"
          src={logo}
          srcSet={`${logo} 500w`}
          width="40%"
        />
        {/* NAME */}
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          {t("title")}
        </Typography>
      </Box>

      {/* START BUTTON */}
      <Box sx={{ textAlign: "center" }}>
        <Button onClick={handleStart} sx={{ width: "50%" }} variant="contained">
          {t("general.start")}
        </Button>
      </Box>
    </Section>
  );
};
