import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";

function Footer() {
  return (
    <footer
      style={{ background: "rgba(242, 248, 247, 1)", marginTop: "100px" }}
    >
      <Container maxWidth="xl">
        <Grid container py={12}>
          <Grid item xs={3}>
            <Typography component="h1" variant="h1" display="flex" mb={3}>
              <Typography
                component="span"
                variant="h1"
                color="white"
                sx={{
                  backgroundColor: "rgba(0, 170, 161, 1)",
                  lineHeight: "100%",
                  letterSpacing: "0.02em",
                }}
                px={0.5}
              >
                Note
              </Typography>
              <Typography
                component="span"
                variant="h5"
                fontWeight={600}
                color="rgba(34, 34, 34, 1)"
                lineHeight={1}
                alignSelf="flex-end"
                ml={0.2}
              >
                Book
              </Typography>
              <Box
                component="span"
                width={4}
                height={4}
                alignSelf="flex-end"
                ml={0.1}
                mb={0.1}
                sx={{
                  backgroundColor: "rgba(0, 170, 161, 1)",
                  borderRadius: "100%",
                }}
              />
            </Typography>
            <Typography component="h6" color="rgba(85, 85, 85, 1)" width="67%">
              Did you come here for something in particular or just general
              Riker
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography component="h6" fontSize="17px" fontWeight={600} mb={3}>
              Blogs
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                li: {
                  mb: 2,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(85, 85, 85, 1)",
                },
              }}
            >
              <li>Travel</li>
              <li>Technology</li>
              <li>Lifestyle</li>
              <li>Fashion</li>
              <li>Business</li>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography component="h6" fontSize="17px" fontWeight={600} mb={3}>
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                li: {
                  mb: 2,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(85, 85, 85, 1)",
                },
              }}
            >
              <li>Faq</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography component="h6" fontSize="17px" fontWeight={600} mb={3}>
              Subscribe for newsletter
            </Typography>
            <Box display="flex" height="45px" mb={4}>
              <Box
                component="input"
                type="text"
                width="65%"
                height="100%"
                px={4}
                fontSize={16}
                color="rgba(119, 119, 119, 1)"
                fontFamily="Noto Sans"
                placeholder="Your Email"
                sx={{
                  outline: "none",
                  border: "none",
                  borderRadius: "6px 0 0 6px",
                  background: "rgba(223, 241, 240, 1)",
                }}
              />
              <Box
                component="button"
                sx={{
                  height: "100%",
                  width: "35%",
                  borderRadius: "0 6px 6px 0",
                  outline: "none",
                  border: "none",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#fff",
                  background: "rgba(0, 170, 161, 1)",
                  fontFamily: "Noto Sans",
                }}
              >
                Subscribe
              </Box>
            </Box>
            <Typography component="h6" fontSize="17px" fontWeight={600} mb={3}>
              Follow On:
            </Typography>
            <Box
              display="flex"
              sx={{
                ".icon-box": {
                  width: "24px",
                  height: "24px",
                  mr: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1.2px solid rgba(119, 119, 119, 1)",
                  borderRadius: "4px",
                  transition: "all 0.1s ease-in-out",
                  "&:hover": {
                    svg: {
                      color: "#fff !important",
                    },
                    background: "#00AAA1",
                    borderColor: "transparent",
                  },
                },
              }}
            >
              <Box className="icon-box">
                <BsTwitter color="#777777" />
              </Box>
              <Box className="icon-box">
                <ImFacebook color="#777777" />
              </Box>
              <Box className="icon-box">
                <GrPinterest color="#777777" />
              </Box>
              <Box className="icon-box" mr={0}>
                <AiFillInstagram color="#777777" size={20} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider color="#D1E7E5" sx={{ borderRadius: "3px" }} />
        <Typography
          py={3.5}
          textAlign="center"
          fontSize={12}
          lineHeight="150%"
          color="#555555"
        >
          Designed By Themefisher & Developed By MiladSadeghi
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
