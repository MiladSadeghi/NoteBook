import { Typography, Box, Avatar, Divider } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { ArticleCreatedAt } from "@/helper/date";

function HeaderCard({
  category,
  title,
  cover,
  author,
  readTime,
  shortDescription,
  withImage,
  width,
  createdAt,
  slug,
}: any) {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      sx={{
        width: { xs: "95%", md: width ? width : 411 },
      }}
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
      <Box component={Link} to={`/article/${slug}`}>
        <Typography
          component="h1"
          variant="h1"
          width={334}
          textTransform="capitalize"
          mb={withImage ? 3 : 1}
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            whiteSpace: "pre-wrap",
          }}
          color="#222222"
        >
          {title}
        </Typography>
      </Box>

      {withImage && (
        <Box
          component="img"
          src={`${process.env.REACT_APP_BACKEND_ADDRESS}${cover.data.attributes.url}`}
          height="229px"
          mb={3}
          sx={{
            background: "rgba(217, 217, 217, 1)",
            borderRadius: 1.5,
            width: { xs: "95%", sm: "80%", md: "100%" },
          }}
        />
      )}
      <Box component="div" display="flex" alignItems="center">
        <Avatar
          alt={author.data.attributes.name}
          src={`${process.env.REACT_APP_BACKEND_ADDRESS}${author.data.attributes.avatar.data.attributes.url}`}
          sx={{ width: 18, height: 18 }}
        />
        <Box component={Link} to={`/author/${author.data.attributes.slug}`}>
          <Typography
            ml={1}
            component="h5"
            variant="h5"
            fontSize={12}
            fontWeight={400}
            lineHeight="12px"
            color="rgba(119, 119, 119, 1)"
          >
            {author.data.attributes.name}
          </Typography>
        </Box>
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
      <Typography
        component="p"
        color="rgba(85, 85, 85, 1)"
        fontWeight={400}
        fontSize={15}
        mt={2}
        lineHeight="22.5px"
        sx={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
          whiteSpace: "pre-wrap",
        }}
      >
        {shortDescription}
      </Typography>
    </Box>
  );
}

export default HeaderCard;
