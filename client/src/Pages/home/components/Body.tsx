import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BodyCard from "@/components/BodyCard";
import HomePagination from "@/components/Pagination/HomePagination";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "@/graphql/queries";

function Body() {
  const [homeContent, setHomeContent] = useState<any>();
  const { data, loading } = useQuery(GET_ARTICLES, {
    variables: { page: 4 },
  });

  useEffect(() => {
    setHomeContent(data);
  }, [data]);

  if (loading || !homeContent || !data) {
    return null;
  }

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
        {homeContent.articles.data &&
          homeContent.articles.data.map((post: any, index: number) => (
            <BodyCard {...post.attributes} key={index} />
          ))}
        <HomePagination
          homeContent={homeContent}
          setHomeContent={setHomeContent}
        />
      </Grid>
    </div>
  );
}

export default Body;
