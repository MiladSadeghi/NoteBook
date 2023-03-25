import { Container, Grid } from "@mui/material";
import React from "react";
import Aside from "./Aside";
import Body from "./Body";

function Main() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={6} mt={10}>
        <Grid item xs={8}>
          <Body />
        </Grid>
        <Grid item xs={4}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
