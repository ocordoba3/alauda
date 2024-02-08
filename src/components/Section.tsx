import { useTheme } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  styles?: CSSProperties;
}

export const Section = ({ children, id, styles }: Props) => {
  const theme = useTheme();
  const smallDevice = theme.breakpoints.up("md");

  return (
    <section
      id={id}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: smallDevice ? "2rem" : "5rem",
        width: "100%",
        ...styles,
      }}
    >
      {children}
    </section>
  );
};
