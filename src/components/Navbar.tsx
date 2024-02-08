import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "/alauda_logo.png";
import { Drawer, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarListItems } from "./NavbarListItems";
import { useCallback, useState } from "react";

export default function Navbar() {
  const theme = useTheme();
  const smallDevice = theme.breakpoints.up("md");
  const [openDrawer, setOpenDrawer] = useState(false);
  const renderListItems = useCallback(
    () => <NavbarListItems smallDevice />,
    [smallDevice]
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            title="Drawer Handler"
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
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClick={() => setOpenDrawer(false)}>
        {renderListItems()}
      </Drawer>
    </>
  );
}
