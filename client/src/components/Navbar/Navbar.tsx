import { AppBar, Box, Grid, Modal, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import LanguageChoicer from "./components/LanguageChoicer";
import DarkModeToggle from "./components/DarkModeToggle";

function Navbar() {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const handleSearchModalOpen = () => setSearchModalOpen(true);
  const handleSearchModalClose = () => setSearchModalOpen(false);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchModalOpen(false);
    navigate(`/search?query=${search}`);
  };

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
              <Link to={"/about-us"}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(51, 51, 51, 1)"
                  lineHeight="100%"
                >
                  About
                </Typography>
              </Link>
              <Link to={"/category"}>
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
              <FiSearch
                onClick={handleSearchModalOpen}
                color="rgba(34, 34, 34, 1)"
                size="18px"
                style={{ cursor: "pointer" }}
              />
              <Modal
                open={searchModalOpen}
                onClose={handleSearchModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0, 0, 0, .1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  outline: "none",
                }}
              >
                <Box
                  sx={{
                    border: "2px solid rgba(0, 170, 161, 1)",
                    boxShadow: 24,
                    p: 4,
                    background: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    width: { md: 500 },
                    outline: "none",
                  }}
                >
                  <Box
                    component="input"
                    sx={{
                      width: "100%",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      outline: "none",
                      px: 2,
                      py: 2,
                      borderRadius: 1,
                      mr: 2,
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Box
                    component="button"
                    disabled={search === ""}
                    onClick={handleSearch}
                    sx={{
                      px: 2,
                      border: "none",
                      outline: "none",
                      color: "white",
                      bgcolor: "rgba(0, 170, 161, 1)",
                      borderRadius: 1,
                      ":disabled": { opacity: 0.45 },
                    }}
                  >
                    Search
                  </Box>
                </Box>
              </Modal>
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
