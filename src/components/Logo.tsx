import { CSSProperties } from "react";
import handleScroll from "../helpers/handleScroll";
import logo from "../../public/alauda_logo.png";

interface Props {
  readonly styles: CSSProperties;
}
const Logo = ({ styles }: Props) => {
  const handleClick = () => handleScroll("home");
  return (
    <img
      alt="Alauda Logo"
      loading="lazy"
      onClick={handleClick}
      src={logo}
      style={{ cursor: "pointer", ...styles }}
    />
  );
};

export default Logo;
