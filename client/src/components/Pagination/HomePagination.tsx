import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function HomePagination() {
  const [page, setPage] = useState(1);

  return (
    <Box width="100%" display="flex" justifyContent="center" mt={5}>
      <Button
        variant={page === 1 ? "outlined" : "contained"}
        disabled={page === 1 ? true : false}
        onClick={() => setPage(page - 1)}
        sx={{
          textTransform: "capitalize",
          background: "rgba(0, 170, 161, 1)",
          ":disabled": {
            background: "none",
          },
          mr: 2,
          "&:hover": {
            backgroundColor: "rgba(0, 155, 161, 1)",
          },
        }}
      >
        <IoIosArrowRoundBack style={{ marginLeft: 2 }} size={17} />
        Prev.
      </Button>
      {[1, 2, 3, 4].map((item: number) => (
        <Button
          sx={{
            mr: 2,
            border: "1px solid rgba(196, 196, 196, 1)",
            minWidth: "41px",
            height: "41px",
            background: page === item ? "rgba(0, 170, 161, 1)" : "#fff",
            color: page === item ? "#fff" : "rgba(102, 102, 102, 1)",
            "&:hover": {
              backgroundColor: page === item ? "rgba(0, 170, 161, 1)" : "#fff",
            },
          }}
          onClick={() => setPage(item)}
          key={item}
        >
          {item}
        </Button>
      ))}
      <Button
        variant={page === 4 ? "outlined" : "contained"}
        disabled={page === 4 ? true : false}
        onClick={() => setPage(page + 1)}
        sx={{
          textTransform: "capitalize",
          background: "rgba(0, 170, 161, 1)",
          ":disabled": {
            background: "none",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 155, 161, 1)",
          },
        }}
      >
        Next
        <IoIosArrowRoundForward style={{ marginRight: 2 }} size={17} />
      </Button>
    </Box>
  );
}

export default HomePagination;
