import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipieDetail";
import CreateRecipe from "./components/CreateRecipe";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/authenticate_reactjs" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
