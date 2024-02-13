import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Section } from "../components/Section";
import { SECTIONS, TITLE_STYLES } from "../utils/constants";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  // Constants
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Section
      id={SECTIONS.contact}
      styles={{
        display: "grid",
        marginBottom: 40,
      }}
    >
      <Typography variant="h4" sx={TITLE_STYLES}>
        {t("contact.title")}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: mediumDevice ? "1fr 1fr" : "1fr",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ textAlign: "justify", mb: 3 }}>
            {t("contact.description")}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify", mb: 3 }}>
            {t("contact.description_2")}
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Grid item xs={12} mb={1}>
            <TextField label="Nombre Completo" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} mb={1}>
            <TextField label="Telefono" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} mb={1}>
            <TextField label="Correo" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} mb={1}>
            <TextField
              label="Mensaje"
              size="small"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ width: "100%" }}>
              {t("general.send")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
