import { useTranslation } from "react-i18next";
import Navbar from "./shared/components/Navbar";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <h1></h1>
    </>
  );
}

export default App;
