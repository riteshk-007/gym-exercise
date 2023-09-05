import React from "react";
import { Box, Stack, Typography } from "@mui/material";
function Footer() {
  return (
    <Box mt="80px" bgcolor="#C0C0C0">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src="/icon.png" alt="logo" style={{ height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "25px", xs: "17px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
        color="#808080"
      >
        Made with ❤️ by Ritesh
      </Typography>
    </Box>
  );
}

export default Footer;
