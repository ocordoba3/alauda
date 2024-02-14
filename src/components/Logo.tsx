import { CSSProperties } from "react";
import handleScroll from "../helpers/handleScroll";
import light_logo from "../assets/light_logo.webp";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  readonly styles?: CSSProperties;
}
const Logo = ({ styles }: Props) => {
  const { t } = useTranslation();
  const handleClick = () => handleScroll("home");
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        alt="Alauda Logo"
        height="auto"
        loading="lazy"
        onClick={handleClick}
        src={light_logo}
        srcSet={`${light_logo} 500w`}
        style={{ cursor: "pointer", ...styles }}
        width={40}
      />
      <Typography variant="h5" sx={{ ml: 2, textAlign: "center" }}>
        {t("title")}
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  styles: {},
};

export default Logo;
