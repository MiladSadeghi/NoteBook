import { Box, Typography } from "@mui/material";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function AuthorCard({
  avatar,
  name,
  email,
  slug,
}: {
  avatar: string;
  name: string;
  email: string;
  slug: string;
}) {
  return (
    <Box display="flex" mb={5}>
      <Box
        component="img"
        src={`${process.env.REACT_APP_BACKEND_ADDRESS}${avatar}`}
        mr={3}
        sx={{
          minWidth: 80,
          minHeight: 80,
          maxWidth: 80,
          maxHeight: 80,
          background: "rgba(217, 217, 217, 1)",
          borderRadius: "100%",
          objectFit: "cover",
        }}
      />
      <Box display="flex" flexDirection="column">
        <Box
          component={Link}
          to={`/author/${slug}`}
          fontSize="17px"
          fontWeight={600}
          mb={1}
          color="#222222"
        >
          {name}
        </Box>
        <Typography
          component="p"
          fontSize="12px"
          fontWeight={300}
          lineHeight="150%"
          color="#666666"
          mb="14px"
        >
          {email}
        </Typography>
        <Box display="flex">
          <Box
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #C4C4C4"
            mr="10px"
            sx={{
              borderRadius: "3px",
            }}
          >
            <FaFacebookF size="10px" color="#999999" />
          </Box>
          <Box
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #C4C4C4"
            mr="10px"
            sx={{
              borderRadius: "3px",
            }}
          >
            <AiOutlineTwitter size="15px" color="#999999" />
          </Box>
          <Box
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #C4C4C4"
            sx={{
              borderRadius: "3px",
            }}
          >
            <AiFillInstagram size="15px" color="#999999" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthorCard;
