import { SECTIONS } from "../utils/constants";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const SECTIONS_VALUES = Object.values(SECTIONS);
type Element = (typeof SECTIONS_VALUES)[number];

interface Props {
  smallDevice: boolean;
}

export const NavbarListItems = ({ smallDevice }: Props) => {
  const { t } = useTranslation();
  const { about, contact, home, services } = SECTIONS;
  const links = [home, about, services, contact];

  const handleScroll = (element: Element) => {
    if (element === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: (document.getElementById(element)?.offsetTop || 0) - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {links.map((el) => (
        <Button
          key={el}
          onClick={() => handleScroll(el)}
          color="inherit"
          sx={{
            textDecoration: "none",
            ml: smallDevice ? 0 : 3,
            py: smallDevice ? 2 : 0,
            px: smallDevice ? 8 : 0,
          }}
        >
          {t(`general.${el}`)}
        </Button>
      ))}
    </>
  );
};
