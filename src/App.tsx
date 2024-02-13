import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Services } from "./sections";
import theme from "./styles/theme.tsx";
import { useState } from "react";
import Footer from "./sections/Footer.tsx";

function App() {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || "light"
  );

  return (
    <>
      <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <Home />
        <div>
          <Navbar setMode={setMode} />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
