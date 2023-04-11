import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "@/graphql/queries";

function About() {
  document.title = "NoteBook - About us";
  const { data, loading } = useQuery(GET_AUTHORS);

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <Body authorsInformation={data.authors.data} />
    </>
  );
}

export default About;
