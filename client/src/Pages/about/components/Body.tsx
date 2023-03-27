import { OurAuthors } from "@/helper/fakeData";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Body() {
  return (
    <Box mt={9.5}>
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h1"
          mb={7}
          textTransform="capitalize"
          textAlign="center"
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
            Meet
          </Typography>
          Our Authors
        </Typography>
        <Grid container spacing={5} mb={12.5}>
          {OurAuthors.map((author: any) => (
            <Grid item xs={6}>
              <Box display="flex" mx="auto" justifyContent="center">
                <Box
                  width="150px"
                  height="150px"
                  sx={{ background: "rgba(217, 217, 217, 1)" }}
                />
                <Box
                  ml={2.5}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography component="h2" variant="h2" mb={1.5}>
                    {author.name}
                  </Typography>
                  <Typography component="h6" variant="h6" mb={2.5}>
                    {author.postCount} Posts
                  </Typography>
                  <Box
                    component={Link}
                    color="rgba(0, 170, 161, 1)"
                    display="flex"
                    alignItems="center"
                  >
                    See details about author{" "}
                    <HiOutlineArrowNarrowRight
                      style={{ marginLeft: 8, marginTop: 4 }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Body;
