import { Section } from "../components/Section";
import { SECTIONS, TITLE_STYLES } from "../utils/constants";
import { Service } from "../components/Service";
import { Typography } from "@mui/material";
import {
  Code as CodeIcon,
  RequestQuote as RequestQuoteIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import platform_img from "../assets/platform.webp";
import software_img from "../assets/software-a-medida.webp";

export const Services = () => {
  // Hooks
  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.services} styles={{ marginBottom: 40 }}>
      <Typography variant="h4" sx={TITLE_STYLES}>
        {t("services.title")}
      </Typography>
      <Service
        Icon={() => <RequestQuoteIcon />}
        description={t("services.service_1_desc")}
        image={platform_img}
        title={t("services.service_1_title")}
      />
      <Service
        Icon={() => <CodeIcon />}
        description={t("services.service_2_desc")}
        image={software_img}
        title={t("services.service_2_title")}
      />
    </Section>
  );
};
