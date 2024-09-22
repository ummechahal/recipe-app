import React from 'react';
import RecipeItem from '../recipeItem/RecipeItem';
import './RecipeList.css';
import { Recipe } from '../../interfaces/Recipe';

interface RecipeListProps {
  recipes: Recipe[];
  setRecipe: any;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, setRecipe }) => {
  return (
    <React.Fragment>
      <ul className="recipe__list">
        {recipes.map((recipe: Recipe) => {
          return (
            <RecipeItem key={recipe.id} recipe={recipe} setRecipe={setRecipe} />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default RecipeList;
