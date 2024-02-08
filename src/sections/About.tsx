import { Typography } from "@mui/material";
import { SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";

export const About = () => {
  return (
    <Section id={SECTIONS.about} styles={{ marginBottom: 40 }}>
      <Typography
        variant="h5"
        sx={{ opacity: "0.4", textAlign: "center", mb: 4 }}
      >
        {`<Conócenos />`}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, at
        voluptates. Nemo expedita sed non dicta dolore, excepturi nesciunt totam
        maiores pariatur alias, amet tempora eum sapiente nihil porro. Rem?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, at
        voluptates.
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "justify", mt: 2 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, at
        voluptates. Nemo expedita sed non dicta dolore, excepturi nesciunt totam
        maiores pariatur alias, amet tempora eum sapiente nihil porro. Rem?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, at
        voluptates. Nemo expedita sed non dicta dolore, excepturi nesciunt totam
        maiores pariatur alias, amet tempora eum sapiente nihil porro. Rem?
      </Typography>
    </Section>
  );
};
