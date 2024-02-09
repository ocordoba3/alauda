import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Services } from "./sections";
import theme from "./styles/theme.tsx";

function App() {
  const mode: PaletteMode =
    (localStorage.getItem("theme") as PaletteMode) || "light";

  return (
    <>
      <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <Home />
        <div>
          <Navbar />
          <About />
          <Services />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
