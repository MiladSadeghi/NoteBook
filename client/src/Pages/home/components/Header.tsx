import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import HeaderCard from "@/components/HeaderCard";
import { useQuery } from "@apollo/client";
import { GET_FEATURE_ARTICLE, GET_POPULAR_ARTICLE } from "@/graphql/queries";
import { useNavigate } from "react-router-dom";

function Header() {
  const [popularPostTab, setPopularPostTab] = useState<number>(0);
  const PopularPostRef = useRef<any>();
  const navigate = useNavigate();
  const {
    data: dataFeatured,
    loading: loadingFeatured,
    error: errorFeatured,
  } = useQuery(GET_FEATURE_ARTICLE);
  const {
    data: dataPopular,
    loading: loadingPopular,
    error: errorPopular,
  } = useQuery(GET_POPULAR_ARTICLE);

  useEffect(() => {
    if (!loadingFeatured && !loadingPopular) {
      PopularPostRef.current.scrollLeft =
        PopularPostRef.current.scrollWidth * ((popularPostTab * 25) / 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popularPostTab]);

  if (dataFeatured === undefined || dataPopular === undefined) {
    return null;
  }

  if (
    !loadingFeatured &&
    dataFeatured.articles.data.length === 0 &&
    !errorFeatured &&
    !loadingPopular &&
    dataPopular.articles.data.length === 0 &&
    !errorPopular
  ) {
    navigate("/404");
    return null;
  }

  return (
    <Box component="div" mt={8} sx={{ backgroundColor: "#F2F8F7" }}>
      <Container maxWidth="xl">
        <Box py={10}>
          <Grid container spacing={5}>
            <Grid item xs={8.8}>
              <Typography component="h3" variant="h3">
                <Typography
                  component="span"
                  color="#fff"
                  fontWeight={600}
                  fontSize={21}
                  px={0.3}
                  mr={1}
                  sx={{ backgroundColor: "#00AAA1" }}
                >
                  Featured
                </Typography>
                This Month
              </Typography>
              <Grid
                container
                item
                height="485px"
                overflow="auto"
                mt={7}
                spacing={1}
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "3px",
                    backgroundClip: "content-box",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "rgba(196, 196, 196, 1)",
                    border: "1px solid transparent",
                    backgroundClip: "content-box",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 170, 161, 1)",
                    backgroundClip: "content-box",
                    borderRadius: "24px",
                  },
                }}
              >
                {dataFeatured.articles.data.map((post: any, index: number) => (
                  <Grid key={index} item xs={6} height={485} marginBottom={2}>
                    <HeaderCard {...post.attributes} withImage={true} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3.2}>
              <Typography component="h3" variant="h3">
                <Typography
                  component="span"
                  color="#fff"
                  fontWeight={600}
                  fontSize={21}
                  px={0.3}
                  mr={1}
                  sx={{ backgroundColor: "#00AAA1" }}
                >
                  Popular
                </Typography>
                Posted
              </Typography>
              <Grid
                container
                item
                height="450px"
                mt={7}
                direction="column"
                xs={12}
                overflow="hidden"
                display="flex"
                ref={PopularPostRef}
                justifyContent="space-between"
                sx={{
                  scrollBehavior: "smooth",
                }}
              >
                {dataPopular.articles.data.map((post: any, index: number) => (
                  <Grid key={index} item width="fit-content">
                    <HeaderCard
                      {...post.attributes}
                      withImage={false}
                      width="fit-content"
                    />
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" width="100%" mt={2}>
                {[0, 1, 2, 3].map((tab: number) => (
                  <Box
                    height={6}
                    width={popularPostTab === tab ? "25px" : "10px"}
                    onClick={() => setPopularPostTab(tab)}
                    key={tab}
                    sx={{
                      backgroundColor:
                        popularPostTab === tab
                          ? "rgba(0, 170, 161, 1)"
                          : "rgba(196, 209, 209, 1)",
                      borderRadius: 3,
                      mr: 1,
                      transition:
                        "width .3s ease-in-out, background-color .3s ease-in-out",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
