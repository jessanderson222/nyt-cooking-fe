import RecipeOfTheDay from "../RecipeOfTheDay";

const ContentContainer = ({ recipes }) => {
  return (
    <div>
      <RecipeOfTheDay recipes={recipes} />
    </div>
  );
};

export default ContentContainer;
