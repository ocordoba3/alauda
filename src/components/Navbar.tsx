import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "/alauda_logo.png";
import { Drawer, IconButton, useTheme } from "@mui/material";
import {
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  ModeNight as ModeNightIcon,
} from "@mui/icons-material";
import { NavbarListItems } from "./NavbarListItems";
import { useCallback, useState } from "react";

export default function Navbar() {
  const theme = useTheme();
  const smallDevice = theme.breakpoints.up("md");
  const [openDrawer, setOpenDrawer] = useState(false);

  const darkMode = theme.palette.mode === "dark";

  const renderListItems = useCallback(
    () => <NavbarListItems smallDevice />,
    [smallDevice]
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            title="Menu"
            sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* LOGO */}
          <img src={logo} alt="Alauda Logo" loading="lazy" width="100" />
          {/* LIST OF LINKS */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {renderListItems()}
          </Box>
          {/* HANDLE MODE */}
          <IconButton
            title={darkMode ? "Light Mode" : "Dark Mode"}
            sx={{ ml: 1 }}
            onClick={() =>
              localStorage.setItem("theme", darkMode ? "light" : "dark")
            }
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
