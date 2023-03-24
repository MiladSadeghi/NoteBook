import React, { useEffect } from "react";
import { useLocation, Routes as RouterRoutes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/home";

function Routes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <RouterRoutes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
      </RouterRoutes>
    </AnimatePresence>
  );
}

export default Routes;
