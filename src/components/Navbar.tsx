import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "/alauda_logo.png";
import { Drawer, IconButton, PaletteMode, useTheme } from "@mui/material";
import {
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  ModeNight as ModeNightIcon,
} from "@mui/icons-material";
import { NavbarListItems } from "./NavbarListItems";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import handleScroll from "../helpers/handleScroll";

interface Props {
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export default function Navbar({ setMode }: Props) {
  // Hooks & State
  const { t } = useTranslation();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  // Consts
  const smallDevice = theme.breakpoints.up("md");
  const darkMode = theme.palette.mode === "dark";

  // Methods
  const handleThemeMode = () => {
    const mode = darkMode ? "light" : "dark";
    setMode(mode);
    localStorage.setItem("theme", mode);
  };

  // JSX Elements to render
  const renderListItems = useCallback(
    () => <NavbarListItems smallDevice />,
    [smallDevice]
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
            title={t("navbar.menu")}
          >
            <MenuIcon />
          </IconButton>
          {/* LOGO */}
          <img
            alt="Alauda Logo"
            loading="lazy"
            onClick={() => handleScroll("home")}
            src={logo}
            style={{ cursor: "pointer" }}
            width="100"
          />
          {/* LIST OF LINKS */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {renderListItems()}
          </Box>
          {/* HANDLE MODE */}
          <IconButton
            title={
              darkMode
                ? t("navbar.switch_to_light_mode")
                : t("navbar.switch_to_dark_mode")
            }
            sx={{ ml: 1 }}
            onClick={handleThemeMode}
          >
            {darkMode ? <LightModeIcon /> : <ModeNightIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClick={() => setOpenDrawer(false)}>
        {renderListItems()}
      </Drawer>
    </>
  );
}
