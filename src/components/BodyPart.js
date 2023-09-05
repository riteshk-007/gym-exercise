import React from "react";
import { Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <button
    type="button"
    onClick={() => {
      setBodyPart(item);
    }}
    style={{
      background: "#fff",
      borderRadius: "10px",
      width: "110px",
      height: "100px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: bodyPart === item ? "4px solid #FF2625" : "none",
    }}
  >
    <Typography
      fontWeight="bold"
      fontFamily="inherit"
      textTransform="uppercase"
      padding="5px"
      textAlign="center"
    >
      <span className="text-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
        {item}
      </span>
    </Typography>
  </button>
);

export default BodyPart;
