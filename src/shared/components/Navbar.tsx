import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";
import logo from "../../../public/alauda_logo.png";
import { Link } from "@mui/material";

export default function Navbar() {
  const { t } = useTranslation();
  const links = ["home", "about", "services", "contact"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <img src={logo} alt="Alauda Logo" loading="lazy" width="100" />
          {/* LIST OF LINKS */}
          <Box>
            {links.map((el) => (
              <Link
                key={el}
                href={`#${el}`}
                color="inherit"
                sx={{ textDecoration: "none", ml: 3 }}
              >
                {t(`general.${el}`)}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
