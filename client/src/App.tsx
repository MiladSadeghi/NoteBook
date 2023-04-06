import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./helper/theme";
import { CssBaseline } from "@mui/material";
import "./styles/font.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const LazyRoutes = React.lazy(() => import("@/App/Routes"));

const client = new ApolloClient({
  uri: process.env.REACT_APP_STRAPI_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Author: {
        keyFields: ["slug"],
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback={"loading..."}>
            <CssBaseline />
            <Navbar />
            <LazyRoutes />
            <Footer />
          </React.Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
