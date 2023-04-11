import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "@/graphql/queries";
import { useNavigate, useParams } from "react-router-dom";

function Author() {
  document.title = "loading...";
  const { slug } = useParams();
  const { data, loading } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });
  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  if (!loading && data.authors.data.length === 0) {
    navigate("/404");
    return null;
  }

  return (
    <>
      <Header {...data.authors.data[0].attributes} />
      <Body {...data.authors.data[0].attributes} />
    </>
  );
}

export default Author;
