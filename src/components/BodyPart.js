import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderRadius: "10px",
            width: "110px",
            height: "100px",
            cursor: "pointer",
            display: "flex",
            borderBottom: "4px solid #FF2625",
          }
        : {
            background: "#fff",
            borderRadius: "10px",
            width: "110px",
            height: "100px",
            cursor: "pointer",
            display: "flex",
          }
    }
    onClick={() => {
      setBodyPart(item);
      // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    {/* <img src="/gym.png" alt="dumbbell" style={{ height: "80px" }} /> */}
    <Typography
      fontWeight="bold"
      fontFamily="inherit"
      textTransform="uppercase"
      padding="5px"
      textAlign="center"
    >
      <h3 className="text-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
        {item}
      </h3>
    </Typography>
  </Stack>
);

export default BodyPart;
