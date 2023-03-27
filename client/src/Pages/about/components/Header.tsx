import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Grammarly from "@/images/grammarly.png";
import Unsplash from "@/images/unsplash.png";
import Wordpress from "@/images/wordpress.png";
import Medium from "@/images/medium.png";
import Blogger from "@/images/blogger.png";

function Header() {
  return (
    <Box pt={17.8} pb={14} sx={{ background: "rgba(242, 248, 247, 1)" }}>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography
          component="h1"
          variant="h1"
          mb={5}
          textTransform="capitalize"
        >
          <Typography
            component="span"
            variant="h1"
            color="#fff"
            fontWeight={600}
            px={0.3}
            mr={1}
            sx={{ backgroundColor: "#00AAA1" }}
          >
            Notebook is a place
          </Typography>
          where you can find your perfect blogs
        </Typography>
        <Typography
          component="p"
          fontSize={15}
          fontWeight={400}
          mb={3}
          color="rgba(85, 85, 85, 1)"
        >
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for change. Completely streamline functionalized models and
          out-of-the-box functionalities. Authoritatively target proactive
          vortals vis-a-vis exceptional results. Compellingly brand emerging
          sources and compelling materials. Globally iterate parallel content
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          textTransform="capitalize"
          mb={2}
        >
          The best ideas can change who we are.
        </Typography>
        <Typography component="p" fontSize={15} fontWeight={400} mb={10}>
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          mb={6}
          textTransform="capitalize"
        >
          <Typography
            component="span"
            variant="h1"
            color="#fff"
            fontWeight={600}
            px={0.3}
            mr={1}
            sx={{ backgroundColor: "#00AAA1" }}
          >
            We Are
          </Typography>
          Featured On
        </Typography>
        <Grid container columns={15}>
          {[Grammarly, Unsplash, Wordpress, Medium, Blogger].map(
            (image: any) => (
              <Grid item xs={3}>
                <img src={image} alt="featured-websites" />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
