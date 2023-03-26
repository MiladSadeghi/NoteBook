import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container maxWidth="xl" sx={{ mt: "64px", py: "100px" }}>
      <Typography
        component="h4"
        fontSize={200}
        fontWeight={700}
        mb={3}
        textAlign="center"
        lineHeight="200px"
        color="rgba(0, 170, 161, 1)"
      >
        404
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        textTransform="capitalize"
        textAlign="center"
      >
        the page you are looking for does not exist!
      </Typography>
      <Box
        component={Link}
        to="/"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="rgba(0, 170, 161, 1)"
        mt={7}
      >
        <HiOutlineArrowNarrowLeft size={30} />
        <Typography component="h4" variant="h4" ml={1.2}>
          Back To Homepage
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
