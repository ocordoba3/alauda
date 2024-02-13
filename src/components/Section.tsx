import { CSSProperties, ReactNode } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

interface Props {
  children: ReactNode;
  id: string;
  styles?: CSSProperties;
}

export const Section = ({ children, id, styles }: Props) => {
  // Hooks
  const theme = useTheme();

  // Consts
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section
      id={id}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: mediumDevice ? "0 15rem" : "0 2rem",
        paddingTop: mediumDevice ? "6rem" : "4rem",
        width: "100%",
        ...styles,
      }}
    >
      {children}
    </section>
  );
};
