import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navigation from "./Components/Navigation";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
