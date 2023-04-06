import { GET_ARTICLES } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function HomePagination({ homeContent, setHomeContent }: any) {
  const [page, setPage] = useState(4);

  const [getArticles] = useLazyQuery(GET_ARTICLES);

  const handlePagination = async (page: number) => {
    try {
      const { data } = await getArticles({ variables: { page: page } });
      setHomeContent(data);
      setPage(page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" mt={5}>
      <Button
        variant={page === 4 ? "outlined" : "contained"}
        disabled={page === 4 ? true : false}
        onClick={() => handlePagination(page + 1)}
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
      {[4, 3, 2, 1].map((item: number, index: number) => (
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
          onClick={() => handlePagination(item)}
          key={item}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant={page === 1 ? "outlined" : "contained"}
        disabled={page === 1 ? true : false}
        onClick={() => handlePagination(page - 1)}
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
