import { Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <footer
      style={{
        marginTop: theme.spacing(6),
        padding: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()}{" "}
          {`${t("title")} - ${t("footer.copy_right")}`}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
