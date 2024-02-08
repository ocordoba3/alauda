import Navbar from "./components/Navbar";
import { About, Contact, Home, Services } from "./sections";

function App() {
  return (
    <>
      <Home />
      <div>
        <Navbar />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;
