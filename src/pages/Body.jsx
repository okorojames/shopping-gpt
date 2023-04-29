import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CategoryTab from "../components/CategoryTab";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="body--container">
        <CategoryTab />
        <Routes>
          <Route to="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
