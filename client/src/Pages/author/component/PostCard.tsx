import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { ArticleCreatedAt } from "@/helper/date";
import { Link } from "react-router-dom";

function PostCard({
  category,
  title,
  author,
  createdAt,
  readTime,
  shortDescription,
  slug,
  cover,
}: any) {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        component="img"
        src={`${process.env.REACT_APP_BACKEND_ADDRESS}${cover.data.attributes.url}`}
        width="100%"
        height="262px"
        mb={4}
        sx={{ borderRadius: "5px", background: "rgba(217, 217, 217, 1)" }}
      />
      <Typography
        component="h6"
        variant="h6"
        fontSize={12}
        fontWeight={400}
        px={1}
        py={0.5}
        mb={1.5}
        sx={{
          backgroundColor: "rgba(223, 241, 240, 1)",
          borderRadius: 1,
          width: "fit-content",
        }}
      >
        {category}
      </Typography>
      <Link to={`/article/${slug}`}>
        <Typography
          component="h1"
          variant="h1"
          mb={3}
          textTransform="capitalize"
          color="#222222"
        >
          {title}
        </Typography>
      </Link>

      <Box component="div" display="flex" alignItems="center" mb={2}>
        <BsCalendar4Week
          color="rgba(153, 153, 153, 1)"
          size={10.8}
          style={{ marginRight: 6.1, marginLeft: 11 }}
        />
        <Typography
          component="p"
          color="rgba(153, 153, 153, 1)"
          fontWeight={400}
          fontSize={12}
        >
          {ArticleCreatedAt(createdAt)}
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ mx: 1, height: 12, borderColor: "rgba(153, 153, 153, 1)" }}
        />
        <Box
          color="rgba(153, 153, 153, 1)"
          fontWeight={400}
          fontSize={12}
          textTransform="capitalize"
          display="flex"
          alignItems="center"
        >
          <MdOutlineWatchLater size={15} style={{ marginRight: 6 }} />
          {readTime} min. to read
        </Box>
      </Box>
      <Typography component="p" fontSize={15}>
        {shortDescription}
      </Typography>
    </Box>
  );
}

export default PostCard;
