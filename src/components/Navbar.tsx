import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Drawer,
  IconButton,
  PaletteMode,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  ModeNight as ModeNightIcon,
} from "@mui/icons-material";
import { NavbarListItems } from "./NavbarListItems";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

interface Props {
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export default function Navbar({ setMode }: Props) {
  // Hooks & State
  const { t } = useTranslation();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  // Consts
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));
  const darkMode = theme.palette.mode === "dark";

  // Methods
  const handleThemeMode = () => {
    const mode = darkMode ? "light" : "dark";
    setMode(mode);
    localStorage.setItem("theme", mode);
  };

  // JSX Elements to render
  const renderListItems = useCallback(
    () => <NavbarListItems mediumDevice />,
    [mediumDevice]
  );

  return (
    <>
      <AppBar position="fixed" sx={{ left: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between", left: 0 }}>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
            title={t("navbar.menu")}
          >
            <MenuIcon />
          </IconButton>
          {/* LOGO */}
          <Logo styles={{ width: 120 }} />
          {/* LIST OF LINKS */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {renderListItems()}
          </Box>
          {/* HANDLE MODE */}
          <Tooltip
            arrow
            title={
              darkMode
                ? t("navbar.switch_to_light_mode")
                : t("navbar.switch_to_dark_mode")
            }
          >
            <IconButton title="" sx={{ ml: 1 }} onClick={handleThemeMode}>
              {darkMode ? <LightModeIcon /> : <ModeNightIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClick={() => setOpenDrawer(false)}>
        {renderListItems()}
      </Drawer>
    </>
  );
}
