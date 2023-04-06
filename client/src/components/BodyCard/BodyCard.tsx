import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { ArticleCreatedAt } from "@/helper/date";
import { Link } from "react-router-dom";

function BodyCard({
  category,
  title,
  cover,
  author,
  readTime,
  shortDescription,
  createdAt,
  slug,
}: any) {
  return (
    <Grid container item xs={12} mb={6} spacing={4}>
      <Grid item xs={4}>
        <Box
          component="img"
          src={`${process.env.REACT_APP_BACKEND_ADDRESS}${cover.data.attributes.url}`}
          width={"100%"}
          height={210}
          mr={4}
          sx={{ background: "#D9D9D9", borderRadius: 1, objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={6}>
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
            mb={2}
            textTransform="capitalize"
            color="#222222"
          >
            {title}
          </Typography>
        </Box>
        <Box component="div" display="flex" alignItems="center" mb={2}>
          <Avatar
            alt={author.data.attributes.name}
            src={`${process.env.REACT_APP_BACKEND_ADDRESS}${author.data.attributes.avatar.data.attributes.url}`}
            sx={{ width: 18, height: 18 }}
          />
          <Link to={`/author/${author.data.attributes.slug}`} color="#777777">
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
          </Link>

          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              ml: 0.7,
              height: 12,
              borderColor: "rgba(153, 153, 153, 1)",
            }}
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
          fontSize={15}
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
      </Grid>
    </Grid>
  );
}

export default BodyCard;
