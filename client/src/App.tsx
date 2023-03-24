import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./App/Routes";
import store from "./features/store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./helper/theme";
import { CssBaseline } from "@mui/material";
import "./styles/font.css";
import Navbar from "@/components/Navbar";

const client = new ApolloClient({
  uri: process.env.REACT_APP_STRAPI_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Routes />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
