import { Grid, Typography } from "@mui/material";
import React from "react";
import { HomeBodyContent } from "@/helper/fakeData";
import BodyCard from "@/components/BodyCard";
import HomePagination from "@/components/Pagination/HomePagination";

function Body() {
  return (
    <div>
      <Typography component="h3" variant="h3" mb={7}>
        <Typography
          component="span"
          color="#fff"
          fontWeight={600}
          fontSize={21}
          px={0.3}
          mr={1}
          sx={{ backgroundColor: "#00AAA1" }}
        >
          Recently
        </Typography>
        Posted
      </Typography>
      <Grid container>
        {HomeBodyContent.map((post: any, index: number) => (
          <Grid item xs={12} key={index} mb={6}>
            <BodyCard {...post} />
          </Grid>
        ))}
        <HomePagination />
      </Grid>
    </div>
  );
}

export default Body;
