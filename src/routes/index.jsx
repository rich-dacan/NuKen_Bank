import React from "react";

import { Routes, Route}    from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Home      from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function Router () {

  return (

    <>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </AnimatePresence>
    
    </>
  )
}
