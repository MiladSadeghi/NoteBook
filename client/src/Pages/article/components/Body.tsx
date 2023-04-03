import { ArticleCreatedAt } from "@/helper/date";
import { TArticle } from "@/types/article";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { options } from "@/helper/markdown";

function Body({ articleInformation }: { articleInformation: TArticle }) {
  console.log(typeof articleInformation.blocks[0].body);
  return (
    <div>
      <Typography
        component="h6"
        variant="h6"
        fontSize={12}
        fontWeight={400}
        px={1}
        py={0.5}
        mb={2.5}
        sx={{
          backgroundColor: "rgba(223, 241, 240, 1)",
          borderRadius: 1,
          width: "fit-content",
        }}
      >
        {articleInformation.category}
      </Typography>
      <Typography component="h1" variant="h1" color="#222222" mb={2}>
        {articleInformation.title}
      </Typography>
      <Box display="flex" alignItems="center" mb={4.5}>
        <Box
          component="img"
          src={`${process.env.REACT_APP_BACKEND_ADDRESS}${articleInformation.author.data.attributes.avatar.data.attributes.url}`}
          alt={
            articleInformation.author.data.attributes.avatar.data.attributes
              .alternativeText
          }
          width={24}
          height={24}
          mr={1}
          sx={{ borderRadius: 50 }}
        />
        <Typography
          component="h3"
          variant="h3"
          fontSize={12}
          fontWeight={400}
          lineHeight={"12px"}
        >
          <Link
            to={`/author/${articleInformation.author.data.attributes.slug}`}
            style={{ color: "#777777" }}
          >
            {articleInformation.author.data.attributes.name}
          </Link>
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1.2,
            height: 12,
            alignSelf: "center",
            width: ".5px",
            borderColor: "rgba(153, 153, 153, 1)",
          }}
        />
        <BsCalendar4Week
          color="rgba(102, 102, 102, 1)"
          size={12.8}
          style={{ marginRight: 6.1 }}
        />
        <Typography
          component="p"
          color="rgba(119, 119, 119, 1)"
          fontWeight={400}
          fontSize={12}
        >
          {ArticleCreatedAt(articleInformation.createdAt)}
        </Typography>
      </Box>
      <Box
        component="img"
        src={`${process.env.REACT_APP_BACKEND_ADDRESS}${articleInformation.cover.data.attributes.url}`}
        width="100%"
        mb={5}
      />
      <Box
        component={Markdown}
        options={options}
        children={`${articleInformation.blocks[0].body.replaceAll(
          "/uploads",
          `${process.env.REACT_APP_BACKEND_ADDRESS}/uploads`
        )}`}
        sx={{
          img: { width: "100%", my: 2 },
          [`& p`]: { lineHeight: "35px" },
          h2: { mb: 3, fontWeight: "700" },
          blockquote: {
            p: 4,
            backgroundColor: "#F2F8F7",
            borderRadius: "8px",
            margin: 0,
            color: "rgba(102, 102, 102, 1)",
            fontStyle: "italic",
            my: 4,
            position: "relative",
            [`& p`]: {
              m: 0,
              position: "relative",
              zIndex: 10,
            },
            ":before": {
              position: "absolute",
              left: 0,
              top: -60,
              content: '"“"',
              fontSize: "180px",
              color: "#DFF1F0",
              zIndex: 9,
            },
          },
        }}
      ></Box>
    </div>
  );
}

export default Body;
