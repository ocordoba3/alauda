import { About, Contact, Home, Services } from "./sections";
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import theme from "./styles/theme";

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || "light"
  );

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Navbar setMode={setMode} />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
