import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import LanguageChoicer from "./components/LanguageChoicer";
import DarkModeToggle from "./components/DarkModeToggle";

function Navbar() {
  return (
    <AppBar
      className="background"
      sx={{ backgroundColor: "rgba(232, 243, 243, 1)", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid
              item
              xs={3}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Link to={"/"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(51, 51, 51, 1)"
                  lineHeight="100%"
                >
                  Homepage
                </Typography>
              </Link>
              <Link to={"/about"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(51, 51, 51, 1)"
                  lineHeight="100%"
                >
                  About
                </Typography>
              </Link>
              <Link to={"/categories"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(51, 51, 51, 1)"
                  lineHeight="100%"
                >
                  Categories
                </Typography>
              </Link>
            </Grid>
            <Grid item display="flex" xs={6} justifyContent="center">
              <Typography component="h1" variant="h1" display="flex">
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    backgroundColor: "rgba(0, 170, 161, 1)",
                    lineHeight: "100%",
                    letterSpacing: "0.02em",
                  }}
                  px={0.5}
                >
                  Note
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  fontWeight={600}
                  color="rgba(34, 34, 34, 1)"
                  lineHeight={1}
                  alignSelf="flex-end"
                  ml={0.2}
                >
                  Book
                </Typography>
                <Box
                  component="span"
                  width={4}
                  height={4}
                  alignSelf="flex-end"
                  ml={0.1}
                  mb={0.1}
                  sx={{
                    backgroundColor: "rgba(0, 170, 161, 1)",
                    borderRadius: "100%",
                  }}
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <FiSearch color="rgba(34, 34, 34, 1)" size="18px" />
              <Link to={"/sign-in"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="#fff"
                  lineHeight="100%"
                  px={2.5}
                  py={1}
                  letterSpacing={0.3}
                  sx={{
                    background: "rgba(0, 170, 161, 1)",
                    borderRadius: "3px",
                  }}
                >
                  Sign in
                </Typography>
              </Link>
              <Link to={"/contact-us"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(51, 51, 51, 1)"
                  lineHeight="100%"
                >
                  Contact
                </Typography>
              </Link>
              <LanguageChoicer />
              <DarkModeToggle />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
