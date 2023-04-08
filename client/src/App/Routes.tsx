import React, { useEffect } from "react";
import {
  useLocation,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/home";
import NotFound from "@/Pages/not found";
import Faq from "@/Pages/faq";
import Category from "@/Pages/categories";
import Contact from "@/Pages/contact";
import About from "@/Pages/about";
import Author from "@/Pages/author";
import Article from "@/Pages/article/Article";
import Search from "@/Pages/search/Search";

function Routes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <RouterRoutes location={location} key={location.pathname}>
      <Route path="/" index element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/category" element={<Category />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/author/:slug" element={<Author />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </RouterRoutes>
  );
}

export default Routes;
