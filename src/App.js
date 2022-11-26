import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navigation from "./Components/Navigation";
import { recipes } from "./Data/Recipes";
import NoPage from "./Components/NoPage";

import Menu from "./Components/Menu";
import MenuItem from "./Components/MenuItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu recipes={recipes} />}>
            <Route path=":itemId" element={<MenuItem recipes={recipes} />} />
          </Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
