import React, { useEffect, useState } from 'react';
import './Main.css';
import MainMenu from '../main-menu/MainMenu';
import RecipeList from '../recipe-list/RecipeList';
import { Recipe as IRecipe } from '../../interfaces/Recipe';
import Recipe from '../recipe-detail/Recipe';

const Main: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<null | IRecipe>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: '100px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <div className="main">
        <MainMenu />
        {!recipe ? (
          <RecipeList recipes={recipes} setRecipe={setRecipe} />
        ) : (
          <Recipe recipe={recipe} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Main;
