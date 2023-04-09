import { ArticleCreatedAt } from "@/helper/date";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { BsCalendar4Week } from "react-icons/bs";

function Comments({ comments }: any) {
  return (
    <Box>
      {comments.map((comment: any, index: number) => (
        <Box key={index} mt={5}>
          <Box
            display="flex"
            alignItems="center"
            sx={{ borderBottom: "1px solid #777777" }}
          >
            <Typography component="h3" variant="h3" fontSize={16}>
              {comment.attributes.name}
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ mx: 1, height: 12, borderColor: "rgba(153, 153, 153, 1)" }}
            />
            <BsCalendar4Week
              color="rgba(153, 153, 153, 1)"
              size={10.8}
              style={{ marginRight: 6.1 }}
            />
            <Typography
              component="p"
              color="rgba(153, 153, 153, 1)"
              fontWeight={400}
              fontSize={12}
            >
              {ArticleCreatedAt(comment.attributes.createdAt)}
            </Typography>
          </Box>
          <Typography component="p" px={1} py={2}>
            {comment.attributes.message}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Comments;
