import { SECTIONS } from "../utils/constants";
import { Button } from "@mui/material";
import { useState } from "react";
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
    switch (element) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "about":
      case "services":
        window.scrollTo({
          top: document.getElementById(element)?.offsetTop || 0,
          behavior: "smooth",
        });
        break;
      default:
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        break;
    }
  };

  return (
    <>
      {links.map((el) => (
        <Button
          id={`link-${el}`}
          key={el}
          onClick={() => handleScroll(el)}
          color="inherit"
          sx={{
            ml: smallDevice ? 0 : 3,
            py: smallDevice ? 2 : 0,
            px: smallDevice ? 4 : 0,
          }}
        >
          {t(`general.${el}`)}
        </Button>
      ))}
    </>
  );
};
