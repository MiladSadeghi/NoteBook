import BodyCard from "@/components/BodyCard/BodyCard";
import { SEARCH_ARTICLES } from "@/graphql/queries";
import { useCustomSearchParams } from "@/hooks";
import { useQuery } from "@apollo/client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [params, setParams] = useCustomSearchParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery(SEARCH_ARTICLES, {
    variables: { title: params.query || "", category: params.category || "" },
  });

  useEffect(() => {
    if (!params.query && !params.category) {
      console.log(params.query, params.category, params);
      navigate("/404");
    }
  }, [params]);

  if (loading) {
    return null;
  }

  console.log(data);

  if (data.articles.data.length === 0) {
    navigate("/404");
  }

  return (
    <Box mt={18} mb={12.5}>
      <Container maxWidth="xl">
        <Box width="100%" sx={{ borderBottom: "1px solid #C4C4C4" }}>
          <Typography
            component="h5"
            variant="h5"
            width="fit-content"
            sx={{
              textTransform: "capitalize",
              color: "#777777",
              position: "relative",
              ":after": {
                position: "absolute",
                content: '""',
                width: "100%",
                height: "3px",
                backgroundColor: "rgba(0, 170, 161, 1)",
                borderRadius: 1,
                bottom: -2,
                left: 0,
              },
            }}
          >
            search result for{" "}
            <Typography
              component="span"
              variant="h5"
              color="#222222"
              sx={{ textTransform: "capitalize" }}
            >
              {params.query || params.category}
            </Typography>
          </Typography>
        </Box>
        <Grid container mt={5}>
          {data.articles.data.map((article: any, index: number) => (
            <BodyCard {...article.attributes} key={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Search;
