import { useTheme } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  styles?: CSSProperties;
}

export const Section = ({ children, id, styles }: Props) => {
  // Hooks
  const theme = useTheme();

  // Consts
  const smallDevice = theme.breakpoints.up("md");

  return (
    <section
      id={id}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: !smallDevice ? "0 2rem" : "0 15rem",
        paddingTop: smallDevice ? "6rem" : "2rem",
        width: "100%",
        ...styles,
      }}
    >
      {children}
    </section>
  );
};
