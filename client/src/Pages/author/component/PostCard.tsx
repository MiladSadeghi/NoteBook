import { THeaderCard } from "@/types/elements";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import AuthorAvatar from "@/images/author-photo.png";

function PostCard({
  category,
  title,
  author,
  createdAt,
  readTime,
  shortDescription,
}: THeaderCard) {
  return (
    <Box display="flex" flexDirection="column">
      <Box
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
      <Typography component="h1" variant="h1" mb={3} textTransform="capitalize">
        {title}
      </Typography>
      <Box component="div" display="flex" alignItems="center" mb={2}>
        <Avatar
          alt={author.name}
          src={AuthorAvatar}
          sx={{ width: 18, height: 18 }}
        />
        <Typography
          ml={1}
          component="h5"
          variant="h5"
          fontSize={12}
          fontWeight={400}
          lineHeight="12px"
          color="rgba(119, 119, 119, 1)"
        >
          {author.name}
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ ml: 0.7, height: 12, borderColor: "rgba(153, 153, 153, 1)" }}
        />
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
          {createdAt}
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
