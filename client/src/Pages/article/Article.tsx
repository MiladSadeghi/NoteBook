import { GET_ARTICLE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aside from "../home/components/Aside";
import Body from "./components/Body";

function Article() {
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
        <Grid item xs={8.8}>
          <Body articleInformation={data.articles.data[0].attributes} />
        </Grid>
        <Grid item xs={3.2}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Article;
