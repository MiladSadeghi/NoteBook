import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as EnvLogo } from "@/images/envnat.svg";
import { ReactComponent as Tech } from "@/images/tech.svg";
import { ReactComponent as Lifash } from "@/images/lifash.svg";
import { ReactComponent as Food } from "@/images/food.svg";
import { ReactComponent as Holitrav } from "@/images/holitrav.svg";
import { ReactComponent as Health } from "@/images/health.svg";
import { useNavigate } from "react-router-dom";

function Category() {
  document.title = "NoteBook - Categories";
  const categoriesContent = [
    {
      category: "environment & nature",
      icon: <EnvLogo />,
      link: "nature",
    },
    {
      category: "technology",
      icon: <Tech />,
      link: "technology",
    },
    {
      category: "lifestyle & fashion",
      icon: <Lifash />,
      link: "lifestyle",
    },
    {
      category: "food",
      icon: <Food />,
      link: "food",
    },
    {
      category: "holiday & travel",
      icon: <Holitrav />,
      link: "travel",
    },
    {
      category: "healthcare",
      icon: <Health />,
      link: "healthcare",
    },
  ];
  const navigate = useNavigate();

  const handleSearch = (category: string) => {
    navigate(`/search?category=${category}`);
  };

  return (
    <Box sx={{ background: "rgba(242, 248, 247, 1)" }} pt="144px" pb={10}>
      <Container maxWidth="xl">
        <Typography component="h1" variant="h1" textAlign="center" mb={9.8}>
          Categories
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {categoriesContent.map(({ category, icon, link }: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <Box
                  px={6}
                  py={4.1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  onClick={() => handleSearch(link)}
                  sx={{
                    background: "rgba(232, 243, 243, 1)",
                    transition: "all 0.2s ease-in-out",
                    borderRadius: 1,
                    cursor: "pointer",
                    svg: {
                      mb: 3,
                    },
                    ":hover": {
                      background: "rgba(0, 170, 161, 1)",
                      path: {
                        fill: "#fff",
                      },
                      h5: {
                        color: "#fff",
                      },
                    },
                  }}
                >
                  {icon}
                  <Typography
                    component="h5"
                    variant="h5"
                    color="#222222"
                    textTransform="capitalize"
                    sx={{
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {category}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Category;
