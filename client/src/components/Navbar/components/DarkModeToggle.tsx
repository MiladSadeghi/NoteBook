import { Box } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { FiSun } from "react-icons/fi";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  return (
    <Box
      component="div"
      display="flex"
      position="relative"
      sx={{ backgroundColor: "#F1F1F1", borderRadius: 1 }}
    >
      <Box
        component={FiSun}
        color={darkMode ? "#00AAA1" : "#fff"}
        size="20px"
        px={1}
        py={0.3}
        boxSizing={"content-box"}
        zIndex={2}
        onClick={() => setDarkMode(false)}
        sx={{ transition: "color 0.3s ease-in-out ", cursor: "pointer" }}
      />
      <Box
        component={HiOutlineMoon}
        size="20px"
        color={darkMode ? "#fff" : "#00AAA1"}
        px={1}
        py={0.3}
        boxSizing={"content-box"}
        zIndex={2}
        sx={{
          rotate: "90deg",
          scale: "-1",
          transition: "color 0.3s ease-in-out ",
          cursor: "pointer",
        }}
        onClick={() => setDarkMode(true)}
      />
      <Box
        position="absolute"
        sx={{
          width: "50%",
          height: "100%",
          left: darkMode ? "50%" : "0%",
          background: "#00AAA1",
          zIndex: "1",
          borderRadius: 1,
          transition: "left 0.3s ease-in-out ",
        }}
      />
    </Box>
  );
}

export default DarkModeToggle;
