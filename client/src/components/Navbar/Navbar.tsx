import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";

function Navbar() {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const handleSearchModalToggle = () =>
    setSearchModalOpen((searchModalOpen) => !searchModalOpen);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearch = () => {
    setSearchModalOpen(false);
    navigate(`/search?query=${search}`);
  };

  const navbarItems = [
    { name: "Homepages", link: "/" },
    { name: "About", link: "/about" },
    { name: "Categories", link: "/categories" },
    { name: "Contact", link: "/contact-us" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navbarItems.map((item: any) => (
          <Box component={Link} to={item.link} sx={{ color: "#222" }}>
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary={"Search"}
              onClick={handleSearchModalToggle}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgba(232, 243, 243, 1)",
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: { xs: "flex", sm: "block" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            <Box
              component={FiMenu}
              onClick={handleDrawerToggle}
              color="#222"
              size={24}
              sx={{ mr: 2, display: { sm: "none" } }}
            />
            <Grid
              container
              alignItems="center"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
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
                    mr={{ xs: 1, md: 0 }}
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
                    mr={{ xs: 1, md: 0 }}
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
                justifyContent="end"
              >
                <FiSearch
                  onClick={handleSearchModalToggle}
                  color="rgba(34, 34, 34, 1)"
                  size="18px"
                  style={{ cursor: "pointer", marginRight: 16 }}
                />
                <Modal
                  open={searchModalOpen}
                  onClose={handleSearchModalToggle}
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
                {/* <LanguageChoicer />
              <DarkModeToggle /> */}
              </Grid>
            </Grid>
          </Toolbar>
          <Box component="nav" display={{ sm: "none" }}>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  background: "rgba(232, 243, 243, 1)",
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
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
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
