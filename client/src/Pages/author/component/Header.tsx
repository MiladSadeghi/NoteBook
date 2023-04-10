import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function Header({ ...authorInformation }: any) {
  const { name, avatar, description, quote, quoteDescription } =
    authorInformation;

  return (
    <Box pt={18} pb={10} sx={{ background: "rgba(242, 248, 247, 1)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_ADDRESS}${avatar.data.attributes.url}`}
              alt={String(avatar.data.attributes.name)}
              width="100%"
              maxHeight={515}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography
              component="h2"
              variant="h2"
              mb={3}
              lineHeight="33.6px"
              color="rgba(34, 34, 34, 1)"
            >
              Hi! {name}
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              color="rgba(85, 85, 85, 1)"
              width="78%"
              mb={3}
            >
              {description}
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              color="rgba(34, 34, 34, 1)"
              mb={2}
            >
              {quote}
            </Typography>
            <Typography
              component="p"
              fontSize={15}
              fontWeight={400}
              color="rgba(85, 85, 85, 1)"
              width="78%"
              mb={5}
            >
              {quoteDescription}
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
