import AuthorCard from "@/components/AuthorCard";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Aside() {
  const categories = [
    { category: "Lifestyle", count: "09" },
    { category: "Travel", count: "05" },
    { category: "Food", count: "09" },
    { category: "Healthcare", count: "10" },
    { category: "Technology", count: "03" },
    { category: "Nature", count: "05" },
  ];

  const tags = [
    "Travel",
    "Lifestyle",
    "Fashion",
    "Technology",
    "Business",
    "Design",
    "Health",
    "Food",
    "Art",
  ];

  return (
    <div>
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
        <AuthorCard
          name="Jenny Kia"
          field="Fashion designer, Blogger, activist"
        />
        <AuthorCard
          name="Andress rasel"
          field="Blogger, activist, content creator, part time designer at: www.gethugothemes.com"
        />
        <AuthorCard
          name="Jenny Kia"
          field="Fashion designer, Blogger, activist"
        />
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
          {categories.map((category: any, index: number) => (
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
                  {category.category}
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  color="rgba(28, 28, 28, 1)"
                  fontWeight={500}
                  fontSize={15}
                >
                  {category.count}
                </Typography>
              </Box>
              {index + 1 !== categories.length && (
                <Divider sx={{ mb: "12.7px", borderBottomStyle: "dashed" }} />
              )}
            </React.Fragment>
          ))}
        </Box>
        <Box mt={10}>
          <Typography component="h3" variant="h3" mb={5}>
            <Typography
              component="span"
              color="#fff"
              fontWeight={600}
              fontSize={21}
              px={0.3}
              mr={1}
              sx={{ backgroundColor: "#00AAA1" }}
            >
              Search
            </Typography>
            With Tags
          </Typography>
          <Box display="flex" flexWrap="wrap" gap="12px">
            {tags.map((tag: string) => (
              <Typography
                key={tag}
                component="h6"
                px="20px"
                py="10px"
                gap="12px"
                border="1px solid rgba(196, 196, 196, 1)"
                sx={{
                  borderRadius: "4px",
                  transition: "all 0.1s ease-in-out",
                  "&:hover": {
                    background: "rgba(0, 170, 161, 1)",
                    color: "#fff",
                    borderColor: "transparent",
                  },
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Aside;
