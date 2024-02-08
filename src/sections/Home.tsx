import { Typography, useTheme } from "@mui/material";
import logo from "/light_logo.png";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";

export const Home = () => {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;

  return (
    <Section
      id={SECTIONS.home}
      styles={{
        height: "100vh",
        padding: "0",
        zIndex: 11000,
        position: "relative",
        backgroundColor: bgColor,
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src={logo} alt="Alauda Logo" loading="lazy" width="40%" />
      </div>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Alauda
      </Typography>
    </Section>
  );
};
