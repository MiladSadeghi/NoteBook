import AuthorCard from "@/components/AuthorCard";
import { GET_ARTICLES_AND_AUTHORS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Aside() {
  const navigate = useNavigate();
  const categories: any = {
    Lifestyle: 0,
    Travel: 0,
    Food: 0,
    Healthcare: 0,
    Technology: 0,
    Nature: 0,
  };
  const { data, loading, error } = useQuery(GET_ARTICLES_AND_AUTHORS);

  if (loading) {
    return null;
  }
  if (!loading && data.articles.data.length === 0 && !error) {
    navigate("/404");
    return null;
  }

  const authors = data.authors.data
    .slice()
    .sort(
      (a: any, b: any) =>
        b.attributes.articles.data.length - a.attributes.articles.data.length
    );

  data.articles.data.forEach(
    (item: any) => (categories[item.attributes.category] += 1)
  );

  return (
    <aside>
      <Typography component="h3" variant="h3" mb={4}>
        <Typography
          component="span"
          color="#fff"
          fontWeight={600}
          fontSize={21}
          px={0.3}
          mr={1}
          sx={{ backgroundColor: "#00AAA1" }}
        >
          Top
        </Typography>
        Authors
      </Typography>
      <Box mb={7}>
        {authors.slice(0, 3).map((item: any) => (
          <AuthorCard
            key={item.attributes.slug}
            avatar={`${item.attributes.avatar.data.attributes.url}`}
            email={item.attributes.email}
            name={item.attributes.name}
            slug={item.attributes.slug}
          />
        ))}
      </Box>
      <Box position="relative" zIndex={12}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "#D9D9D9",
            mixBlendMode: "normal",
            content: '""',
            zIndex: 10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "#00AAA1",
            mixBlendMode: "multiply",
            content: '""',
            zIndex: 11,
          }}
        />
        <Box position="relative" zIndex={13} px={2.5} py={7}>
          <Typography
            component="p"
            fontWeight={600}
            fontSize="19px"
            color="white"
            textTransform="capitalize"
            width="65%"
            zIndex={11}
          >
            want to travel sikkim by car?
          </Typography>
          <Typography
            component="p"
            fontSize="14px"
            fontWeight={300}
            color="white"
            mt="10px"
            width="80%"
            lineHeight="19.6px"
          >
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into
          </Typography>
          <Box
            px={3}
            py={1.5}
            mt={4}
            color="rgba(0, 170, 161, 1)"
            display="inline-block"
            fontWeight={300}
            sx={{ borderRadius: "5px", background: "#fff" }}
          >
            Visit Us
          </Box>
        </Box>
      </Box>
      <Box mt={7} width="100%">
        <Typography
          component="h3"
          variant="h3"
          color="#fff"
          fontWeight={600}
          fontSize={21}
          px={0.3}
          mb={4.5}
          display="inline-block"
          sx={{ backgroundColor: "#00AAA1" }}
        >
          Categories
        </Typography>
        <Box>
          {Object.entries(categories).map(([key, value]: any, index: any) => (
            <React.Fragment key={index}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mb="11.7px"
              >
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(28, 28, 28, 1)"
                  fontWeight={500}
                  fontSize={15}
                >
                  {key}
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(28, 28, 28, 1)"
                  fontWeight={500}
                  fontSize={15}
                >
                  {value}
                </Typography>
              </Box>
              {index + 1 !== Object.keys(categories).length && (
                <Divider sx={{ mb: "12.7px", borderBottomStyle: "dashed" }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </aside>
  );
}

export default Aside;
