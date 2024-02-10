import { SxProps, Theme } from "@mui/material";
import { ValuesObj } from "../interfaces/about";
import { Check as CheckIcon } from '@mui/icons-material';

export const SECTIONS = {
    home: "home",
    about: "about",
    services: "services",
    contact: "contact",
} as const;

export const TITLE_STYLES: SxProps<Theme> = {
    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    fontWeight: 600,
    mb: 2,
    textAlign: "center",
    width: "100%"
};

export const ABOUT_DATA: ValuesObj[] = [
    {
        sx: TITLE_STYLES,
        text: "about.title",
        variant: "h4",
    },
    {
        sx: { mb: 4, textAlign: "justify" },
        text: "about.description",
        variant: "h6"
    },
    {
        sx: { mb: 2 },
        text: "about.mision_title",
        variant: "h4",
    },
    {
        sx: { textAlign: "justify", mb: 4 },
        text: "about.mision_description",
        variant: "h6",
    },
    {
        sx: { mb: 2 },
        text: "about.values_title",
        variant: "h4",
    },
    {
        sx: { mb: 2, width: "100%" },
        text: "about.value_1_title",
        variant: "h5",
        Icon: CheckIcon,
    },
    {
        sx: { textAlign: "justify", mb: 3 },
        text: "about.value_1",
        variant: "h6",
    },
    {
        sx: { mb: 2, width: "100%" },
        text: "about.value_2_title",
        variant: "h5",
        Icon: CheckIcon,
    },
    {
        sx: { textAlign: "justify", mb: 3 },
        text: "about.value_2",
        variant: "h6",
    },
    {
        sx: { mb: 2, width: "100%" },
        text: "about.value_3_title",
        variant: "h5",
        Icon: CheckIcon,
    },
    {
        sx: { textAlign: "justify", mb: 3 },
        text: "about.value_3",
        variant: "h6",
    },
];