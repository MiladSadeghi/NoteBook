import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

function Contact() {
  document.title = "NoteBook - Contact us";
  return (
    <Container maxWidth="xl" sx={{ pt: 8, pb: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} mb={5}>
          <Typography
            component="h1"
            variant="h1"
            mt={10}
            textAlign="center"
            lineHeight="37.8px"
          >
            <Typography
              component="span"
              color="#fff"
              fontSize={27}
              fontWeight={600}
              px={0.3}
              mr={1}
              sx={{ backgroundColor: "#00AAA1" }}
            >
              Contact
            </Typography>
            Us
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={3}>
          <Grid item xs={6}>
            <Input placeholder="Name" />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Email" />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="Subject" />
          </Grid>
          <Grid item xs={12}>
            <Textarea placeholder="Type your message" />
          </Grid>
          <Grid item xs={12}>
            <Box
              component="button"
              sx={{
                py: 1.8,
                px: 4.2,
                background: "rgba(0, 170, 161, 1)",
                outline: "none",
                border: "none",
                fontFamily: "Noto Sans",
                fontSize: 15,
                fontWeight: 400,
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Send messages
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} flexDirection="column">
          <Typography
            component="p"
            color="rgba(85, 85, 85, 1)"
            fontSize={15}
            mb={5}
          >
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without
          </Typography>
          <Typography
            component="p"
            color="rgba(85, 85, 85, 1)"
            fontSize={15}
            mb={1}
          >
            miladsadeghi2323@gmail.com
          </Typography>
          <Typography
            component="p"
            color="rgba(85, 85, 85, 1)"
            fontSize={15}
            mb={4}
          >
            Tel: @wsxxsw
          </Typography>
          <Typography component="p" mb={2} fontSize={15} fontWeight={500}>
            Follow on:
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
    </Container>
  );
}

export default Contact;
