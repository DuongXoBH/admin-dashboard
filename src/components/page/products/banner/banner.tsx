import { Box, Typography, Button } from "@mui/material";

export default function CustomComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "350px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: "16px",
        color: "white",
        backgroundColor: "#4880FF",
        px: "130px",
        py: "50px",
      }}
    >
      <Typography variant="body1" sx={{ lineHeight: "1.75rem" }}>
        September 12-22
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          lineHeight: "3rem",
          maxWidth: "413px",
          width: "100%",
        }}
      >
        Enjoy free home delivery in this summer
      </Typography>

      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.75rem",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        Designer Dresses - Pick from trendy Designer Dress.
      </Typography>

      <Button
        sx={{
          width: "10rem",
          height: "2.75rem",
          backgroundColor: "orange",
          borderRadius: "11px",
          "&:hover": {
            backgroundColor: "darkorange",
          },
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
