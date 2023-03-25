import { Typography } from "@mui/material";
import React from "react";

function Aside() {
  return (
    <div>
      <Typography component="h3" variant="h3">
        <Typography
          component="span"
          color="#fff"
          fontWeight={600}
          fontSize={21}
          px={0.3}
          mr={1}
          sx={{ backgroundColor: "#00AAA1" }}
        >
          Top
        </Typography>
        Authors
      </Typography>
    </div>
  );
}

export default Aside;
