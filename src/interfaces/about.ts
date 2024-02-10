import { SxProps, Theme } from "@mui/material";
import { ElementType } from "react";

type AllowedVariants = "h4" | "h5" | "h6";

export interface ValuesObj {
    variant: AllowedVariants;
    sx: SxProps<Theme>;
    text: string;
    Icon?: ElementType;
}