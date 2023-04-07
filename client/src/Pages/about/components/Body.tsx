import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Body({ authorsInformation }: { authorsInformation: any }) {
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
          {authorsInformation.map((author: any, index: number) => (
            <Grid item xs={6} key={index}>
              <Box
                display="flex"
                mx="auto"
                justifyContent="center"
                width="380px"
              >
                <Box
                  component="img"
                  width="150px"
                  height="150px"
                  src={`${process.env.REACT_APP_BACKEND_ADDRESS}${author.attributes.avatar.data.attributes.url}`}
                  sx={{
                    background: "rgba(217, 217, 217, 1)",
                    objectFit: "cover",
                  }}
                />
                <Box
                  ml={2.5}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography component="h2" variant="h2" mb={1.5}>
                    {author.attributes.name}
                  </Typography>
                  <Typography component="h6" variant="h6" mb={2.5}>
                    {author.attributes.articles?.data?.length} Posts
                  </Typography>
                  <Box
                    component={Link}
                    color="rgba(0, 170, 161, 1)"
                    display="flex"
                    alignItems="center"
                    to={`/author/${author.attributes.slug}`}
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
