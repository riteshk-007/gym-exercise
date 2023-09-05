import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh" // Added a height to center the loader vertically
  >
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
