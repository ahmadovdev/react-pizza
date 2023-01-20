import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import "./scss/app.scss";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </div>
    </div>
  );
}

export default App;
