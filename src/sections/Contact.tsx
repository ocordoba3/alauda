import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";

export const Contact = () => {
  const theme = useTheme();
  const smallDevice = theme.breakpoints.up("md");

  return (
    <Section
      id={SECTIONS.contact}
      styles={{
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 40,
      }}
    >
      <Typography
        variant="h5"
        sx={{ opacity: "0.4", textAlign: "center", mb: 4 }}
      >
        {`<Contactanos />`}
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: 8,
          width: !smallDevice ? "100%" : "50%",
          p: 2,
        }}
      >
        <Grid item xs={12} md={6}>
          <TextField label="Nombre Completo" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Telefono" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Correo" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mensaje"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained">Enviar</Button>
        </Grid>
      </Grid>
    </Section>
  );
};
