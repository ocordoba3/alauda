import { Box, Button, Typography, useTheme } from "@mui/material";
import logo from "/light_logo.png";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";

export const Home = () => {
  const theme = useTheme();
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
        padding: "0",
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
          alauda
        </Typography>
      </Box>

      {/* START BUTTON */}
      <Button variant="contained" onClick={handleStart}>
        ¡Empecemos!
      </Button>
    </Section>
  );
};
