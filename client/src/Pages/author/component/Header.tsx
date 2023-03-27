import React from "react";
import { AuthorDetail } from "@/helper/fakeData";
import { Box, Container, Grid, Typography } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function Header() {
  return (
    <Box pt={18} pb={10} sx={{ background: "rgba(242, 248, 247, 1)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Box
              width="100%"
              height="515px"
              sx={{ background: "rgba(217, 217, 217, 1)" }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography
              component="h2"
              variant="h2"
              mb={3}
              lineHeight="33.6px"
              color="rgba(34, 34, 34, 1)"
            >
              Hi! {AuthorDetail.name}
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              color="rgba(85, 85, 85, 1)"
              width="78%"
              mb={3}
            >
              {AuthorDetail.description}
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              color="rgba(34, 34, 34, 1)"
              mb={2}
            >
              {AuthorDetail.quote}
            </Typography>
            <Typography
              component="p"
              fontSize={15}
              fontWeight={400}
              color="rgba(85, 85, 85, 1)"
              width="78%"
              mb={5}
            >
              {AuthorDetail.quoteDescription}
            </Typography>
            <Typography component="h6" fontSize="17px" fontWeight={600} mb={4}>
              Follow On Social Media:
            </Typography>
            <Box
              display="flex"
              sx={{
                ".icon-box": {
                  mr: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  svg: {
                    transition: "all 0.1s ease-in-out",
                    "&:hover": {
                      color: "#00AAA1 !important",
                    },
                  },
                },
              }}
            >
              <Box className="icon-box">
                <BsFacebook color="#777777" size={24.5} />
              </Box>
              <Box className="icon-box">
                <AiFillTwitterCircle color="#777777" size={27} />
              </Box>
              <Box className="icon-box" mr={0}>
                <AiFillInstagram color="#777777" size={29} />
              </Box>
              <Box className="icon-box">
                <GrPinterest color="#777777" size={24} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
