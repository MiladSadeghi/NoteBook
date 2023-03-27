import React, { useEffect } from "react";
import {
  useLocation,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/home";
import NotFound from "@/Pages/not found";
import Faq from "@/Pages/faq";
import Category from "@/Pages/categories";
import Contact from "@/Pages/contact";
import About from "@/Pages/about";

function Routes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <RouterRoutes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/404" index element={<NotFound />} />
        <Route path="/faq" index element={<Faq />} />
        <Route path="/category" index element={<Category />} />
        <Route path="/contact-us" index element={<Contact />} />
        <Route path="/about-us" index element={<About />} />
        <Route path="*" index element={<Navigate to="/404" />} />
      </RouterRoutes>
    </AnimatePresence>
  );
}

export default Routes;
