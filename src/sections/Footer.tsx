import {
  Box,
  Container,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  X as XIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { colors } from "../styles/theme";
import Logo from "../components/Logo";

const sxIcon: SxProps<Theme> = { cursor: "pointer", m: 2 };

const Footer = () => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  // Constants
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <footer
      style={{
        marginTop: theme.spacing(12),
        padding: theme.spacing(4),
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: mediumDevice ? "1fr 1fr" : "1fr",
          justifyContent: "center",
          p: 0,
        }}
      >
        {/* Company Logo and Copy right */}
        <Box
          sx={{
            borderBottom: !mediumDevice
              ? `1px solid ${colors.lightBackground}`
              : "none",
            borderRight: mediumDevice
              ? `1px solid ${colors.lightBackground}`
              : "none",
            p: 2,
            textAlign: "center",
          }}
        >
          <Logo styles={{ width: 200 }} />
          <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()}{" "}
            {`${t("title")} - ${t("footer.copy_right")}`}
          </Typography>
        </Box>

        {/* Social Media */}
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6" align="center">
            {t("footer.follow_us")}
          </Typography>
          <FacebookIcon sx={sxIcon} />
          <InstagramIcon sx={sxIcon} />
          <XIcon sx={sxIcon} />
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
