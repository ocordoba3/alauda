import { Button } from "@mui/material";
import { SECTIONS } from "../utils/constants";
import { useTranslation } from "react-i18next";
import handleScroll from "../helpers/handleScroll";

interface Props {
  readonly mediumDevice: boolean;
}

export const NavbarListItems = ({ mediumDevice }: Props) => {
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
              ml: mediumDevice ? 0 : 3,
              py: mediumDevice ? 2 : 0,
              px: mediumDevice ? 4 : 0,
            }}
          >
            {t(`general.${el}`)}
          </Button>
        ))}
    </>
  );
};
