import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AuthorPosts } from "@/helper/fakeData";
import PostCard from "./PostCard";

function Body() {
  return (
    <Box my={12.5}>
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h1"
          mb={7}
          textTransform="capitalize"
        >
          <Typography
            component="span"
            variant="h1"
            color="#fff"
            fontWeight={600}
            px={0.3}
            mr={1}
            sx={{ backgroundColor: "#00AAA1" }}
          >
            Read
          </Typography>
          Author Blogs
        </Typography>
        <Grid container spacing={4} rowSpacing={7}>
          {AuthorPosts.map((item: any, index: number) => (
            <Grid item xs={4} key={index}>
              <PostCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Body;
