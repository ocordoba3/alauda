import { Check as CheckIcon } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";
import { ValuesObj } from "../interfaces/about";

export const SECTIONS = {
  home: "home",
  about: "about",
  services: "services",
  contact: "contact",
} as const;

export const TITLE_STYLES: SxProps<Theme> = {
  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
  fontWeight: 600,
  mb: 4,
  width: "100%",
};

const SUBTITLE_STYLES: SxProps<Theme> = {
  fontWeight: 400,
  mb: 2,
  width: "100%",
};

const TEXT_STYLES: SxProps<Theme> = { mb: 4, textAlign: "justify" };

const ITEM_TITLE_STYLES: SxProps<Theme> = { mb: 2, ml: 1, width: "100%" };

export const ABOUT_DATA: ValuesObj[] = [
  {
    sx: TITLE_STYLES,
    text: "about.title",
    variant: "h4",
  },
  {
    sx: TEXT_STYLES,
    text: "about.description",
    variant: "h6",
  },
  {
    sx: SUBTITLE_STYLES,
    text: "about.mision_title",
    variant: "h4",
  },
  {
    sx: TEXT_STYLES,
    text: "about.mision_description",
    variant: "h6",
  },
  {
    sx: SUBTITLE_STYLES,
    text: "about.values_title",
    variant: "h4",
  },
  {
    Icon: CheckIcon,
    sx: ITEM_TITLE_STYLES,
    text: "about.value_1_title",
    variant: "h5",
  },
  {
    sx: TEXT_STYLES,
    text: "about.value_1",
    variant: "h6",
  },
  {
    Icon: CheckIcon,
    sx: ITEM_TITLE_STYLES,
    text: "about.value_2_title",
    variant: "h5",
  },
  {
    sx: TEXT_STYLES,
    text: "about.value_2",
    variant: "h6",
  },
  {
    Icon: CheckIcon,
    sx: ITEM_TITLE_STYLES,
    text: "about.value_3_title",
    variant: "h5",
  },
  {
    sx: TEXT_STYLES,
    text: "about.value_3",
    variant: "h6",
  },
];
