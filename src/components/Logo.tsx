import { CSSProperties } from "react";
import handleScroll from "../helpers/handleScroll";
import logo from "/alauda_logo.png";

interface Props {
  styles: CSSProperties;
}
const Logo = ({ styles }: Props) => {
  return (
    <img
      alt="Alauda Logo"
      loading="lazy"
      onClick={() => handleScroll("home")}
      src={logo}
      style={{ cursor: "pointer", ...styles }}
    />
  );
};

export default Logo;
