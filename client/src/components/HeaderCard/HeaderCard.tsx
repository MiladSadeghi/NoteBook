import { Typography, Box, Avatar, Divider } from "@mui/material";
import React from "react";
import AuthorAvatar from "@/images/author-photo.png";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { THeaderCard } from "@/types/elements";

function HeaderCard({
  category,
  title,
  image,
  author,
  createdAt,
  readTime,
  shortDescription,
  withImage,
  width,
}: THeaderCard & { width?: string }) {
  console.log(width);
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      width={width ? width : 431}
    >
      <Typography
        component="h6"
        variant="h6"
        fontSize={12}
        fontWeight={400}
        px={1}
        py={0.5}
        sx={{
          backgroundColor: "rgba(223, 241, 240, 1)",
          borderRadius: 1,
          marginBottom: 1,
          width: "fit-content",
        }}
      >
        {category}
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        width={334}
        textTransform="capitalize"
        mb={withImage ? 3 : 1}
      >
        {title}
      </Typography>
      {withImage && (
        <Box
          width="100%"
          height="229px"
          mb={3}
          sx={{ background: "rgba(217, 217, 217, 1)", borderRadius: 1.5 }}
        />
      )}
      <Box component="div" display="flex" alignItems="center">
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
      <Typography
        component="p"
        color="rgba(85, 85, 85, 1)"
        fontWeight={400}
        fontSize={15}
        mt={2}
        lineHeight="22.5px"
      >
        {shortDescription}
      </Typography>
    </Box>
  );
}

export default HeaderCard;
