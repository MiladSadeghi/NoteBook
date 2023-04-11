import { GET_ARTICLE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aside from "../home/components/Aside";
import Body from "./components/Body";

function Article() {
  document.title = "loading...";
  const { slug } = useParams();
  const { data, loading } = useQuery(GET_ARTICLE, {
    variables: { slug },
  });
  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  if (!loading && data.articles.data.length === 0) {
    navigate("/404");
    return null;
  }

  return (
    <Container maxWidth="xl">
      <Grid container mt={7} mb={10} spacing={11}>
        <Grid item md={7} lg={8.5}>
          <Body
            articleID={data.articles.data[0].id}
            articleInformation={data.articles.data[0].attributes}
          />
        </Grid>
        <Grid item md={4} lg={3.5}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Article;
