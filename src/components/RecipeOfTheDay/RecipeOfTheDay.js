import { useRef, useEffect } from "react";
import "./RecipeOfTheDay.scss";

const RecipeOfTheDay = ({ recipes }) => {
  const recipe = useRef({});
  useEffect(() => {
    if (!recipes.length) return;
    recipe.current = recipes[Math.floor(Math.random() * recipes.length)];
  }, [recipes]);

  console.log(recipe.current);
  return (
    <article>
      <a className="rotd flex" href="/">
        <img
          className="rotd-image flex"
          alt="recipe of the day"
          src={recipe.current.image}
        />
      </a>
      <a className="rotd-label" href="/">
        <div className="rotd-badge font-tnr">
          RECIPE
          <span className="br"> </span>
          OF THE DAY
        </div>
        <div className="rotd-label-content">
          <div className="border-box mb-15">
            <h3 className="rotd-name font-tnr">{recipe.current.name}</h3>
            <span className="rotd-text font-tnr">{recipe.current.text}</span>
          </div>
          <div className="mt-10 font-14 bold">{recipe.current.author}</div>
        </div>
      </a>
    </article>
  );
};

export default RecipeOfTheDay;
