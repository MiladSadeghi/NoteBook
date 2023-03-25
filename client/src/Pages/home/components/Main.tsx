import { Container, Grid } from "@mui/material";
import React from "react";
import Aside from "./Aside";
import Body from "./Body";

function Main() {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "100px" }}>
      <Grid container spacing={6} mt={10}>
        <Grid item xs={8.8}>
          <Body />
        </Grid>
        <Grid item xs={3.2}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
