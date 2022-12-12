import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navigation from "./Components/Navigation";
import { recipes } from "./Data/Recipes";
import NoPage from "./Components/NoPage";
import Search from "./Components/Search";
import Menu from "./Components/Recipes";
import RecipeItem from "./Components/RecipeItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<Search details={recipes} />}>
            <Route path=":itemId" element={<RecipeItem recipes={recipes} />} />
          </Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
