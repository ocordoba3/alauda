import { Typography } from "@mui/material";
import { ABOUT_DATA, SECTIONS } from "../utils/constants";
import { Section } from "../components/Section";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.about} styles={{ marginBottom: 40 }}>
      {ABOUT_DATA.map(({ sx, text, variant, Icon }) => (
        <Typography key={uuid()} variant={variant} sx={sx}>
          {Icon && <Icon />}
          {t(text)}
        </Typography>
      ))}
    </Section>
  );
};
