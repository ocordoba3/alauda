import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { SECTIONS, TITLE_STYLES } from "../utils/constants";
import { Section } from "../components/Section";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  // Constants
  const smallDevice = theme.breakpoints.up("md");

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
          gridTemplateColumns: smallDevice ? "1fr 1fr" : "1fr",
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
          spacing={1}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: 2,
            // Should have the same value
            pb: 4,
            pr: 4,
            // Should have the same value
            pt: 2,
            pl: 2,
            mt: 0,
          }}
        >
          <Grid item xs={12}>
            <TextField label="Nombre Completo" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Telefono" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
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
