import styled from "@emotion/styled";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

function LanguageChoicer() {
  const [language, setLanguage] = useState("En");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl variant="standard">
      <Select
        value={language}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={IoIosArrowDown}
        sx={{
          width: 45,
          border: "none",
          background: "none",
          color: "rgba(51, 51, 51, 1)",
          "::before, ::after": {
            border: "none !important",
            outline: "none !important",
            background: "none !important",
          },
          "& .MuiSelect-select, & .MuiSelect-select::before": {
            border: "none !important",
            outline: "none !important",
            background: "none !important",
          },
        }}
      >
        <MenuItem sx={{ m: 1, borderRadius: 1 }} value={"En"}>
          En
        </MenuItem>
        <MenuItem sx={{ m: 1, borderRadius: 1 }} value={"Pr"}>
          Pr
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageChoicer;
