import { SECTIONS } from "../utils/constants";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import handleScroll from "../helpers/handleScroll";

interface Props {
  smallDevice: boolean;
}

export const NavbarListItems = ({ smallDevice }: Props) => {
  // Hooks
  const { t } = useTranslation();

  // Consts
  const links = Object.values(SECTIONS);

  return (
    <>
      {links
        .filter((el) => el !== "home")
        .map((el) => (
          <Button
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
