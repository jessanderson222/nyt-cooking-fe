import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";
import "./App.scss";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const recipeUrl = "http://localhost:3000/api/v1/recipes";

    fetch(recipeUrl)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="app">
      <NavBar />
      <ContentContainer recipes={recipes} />
    </div>
  );
}

export default App;
