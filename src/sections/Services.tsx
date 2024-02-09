import { Avatar, Box, Grid, Typography } from "@mui/material";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";
import { deepOrange } from "@mui/material/colors";
import { AddIcCallTwoTone } from "@mui/icons-material";

export const Services = () => {
  return (
    <Section id={SECTIONS.services} styles={{ marginBottom: 40 }}>
      <Typography
        variant="h4"
        sx={{ opacity: "0.4", textAlign: "center", mb: 4 }}
      >
        {`<Nuestros servicios />`}
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {[1, 2, 3, 4].map((el) => (
            <Box key={el} sx={{ display: "flex", mb: 2 }}>
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 60, height: 60, mr: 2 }}
              >
                <AddIcCallTwoTone />
              </Avatar>
              <Typography variant="h6">
                WEB & MOBILE DESIGN Raw denim typewriter Carles irony. Helvetica
                farers Blue Bottle, distery vero you probably haven’t heard of
                them disrupt. Pariatur meh vegan ut.
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="https://solopine.com/willow/wp-content/uploads/2014/04/services-img.png"
            alt="Image"
          />
        </Grid>
      </Grid>
    </Section>
  );
};
