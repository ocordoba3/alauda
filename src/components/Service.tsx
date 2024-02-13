import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  description: string;
  Icon: () => JSX.Element;
  image: string;
  title: string;
}

export const Service = ({ description, Icon, image, title }: Props) => {
  // Hooks
  const theme = useTheme();

  // Constants
  const mediumDevice = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: mediumDevice ? "1fr 1fr" : "1fr",
        gap: 4,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {/* SERVICE ONE */}
        <Box>
          <Box sx={{ alignItems: "center", display: "flex", mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 40,
                height: 40,
                mr: 2,
              }}
            >
              <Icon />
            </Avatar>
            <Typography variant="h4">{title}</Typography>
          </Box>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            {description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <img width="80%" src={image} alt={`Image for ${title}`} />
      </Box>
    </Box>
  );
};
