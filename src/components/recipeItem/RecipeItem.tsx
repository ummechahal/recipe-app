import React from 'react';
import './RecipeItem.css';
import { Recipe } from '../../interfaces/Recipe';

interface RecipeItemProps {
  recipe: Recipe;
  key: any;
  setRecipe: any;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, key, setRecipe }) => {
  return (
    <React.Fragment>
      <li className="recipe__item" key={key} onClick={() => setRecipe(recipe)}>
        <img
          src={recipe.image}
          alt="recipe banner"
          className="recipe__item__banner"
        />
        <div className="recipe__item__detail">
          <p className="title">{recipe.name}</p>{' '}
          <span className="reviews">Reviews {recipe.reviewCount}</span>
          <span className="time">{recipe.cookTimeMinutes} minutes</span>
          <span className="meal__type">{recipe.mealType.join(', ')}</span>
        </div>
      </li>
    </React.Fragment>
  );
};

export default RecipeItem;
