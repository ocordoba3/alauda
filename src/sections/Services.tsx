import { Typography } from "@mui/material";
import { SECTIONS, TITLE_STYLES } from "../utils/constants";
import { Section } from "../components/Section";
import { useTranslation } from "react-i18next";
import { Service } from "../components/Service";
import {
  Code as CodeIcon,
  RequestQuote as RequestQuoteIcon,
} from "@mui/icons-material";

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
        image="https://solopine.com/willow/wp-content/uploads/2014/04/services-img.png"
        title={t("services.service_1_title")}
      />
      <Service
        Icon={() => <CodeIcon />}
        description={t("services.service_2_desc")}
        image="https://www.promentwebsolutions.cat/wp-content/uploads/2018/06/software-a-medida-1080x936.jpg"
        title={t("services.service_2_title")}
      />
    </Section>
  );
};
