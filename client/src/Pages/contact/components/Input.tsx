import { Box } from "@mui/material";
import React from "react";

type TInput = {
  placeholder: string;
};

function Input({ placeholder }: TInput) {
  return (
    <Box
      component="input"
      width="100%"
      placeholder={placeholder}
      fontFamily="Noto Sans"
      fontSize={15}
      p={2}
      sx={{
        border: "1.5px solid rgba(148, 215, 211, 1)",
        outline: "none",
        borderRadius: "5px",
      }}
    />
  );
}

export default Input;
