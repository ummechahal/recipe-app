import React, { Key } from 'react';
import Tick from '../../assets/Vector.png';
import './Recipe.css';

const RecipeDetail: React.FC<any> = ({ recipe }) => {
  return (
    <React.Fragment>
      <div className="recipe__detail">
        <div className="ingredient__card">
          <h4 className="title">{recipe.name}</h4>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, deserunt. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloremque, deserunt. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloremque, deserunt.
          </p>
          <h3>Ingredient</h3>
          <div className="horizontal" />
          <ul className="ingredients">
            {recipe.ingredients.map((ingredient: string[], key: Key) => {
              return (
                <li className="item" key={key}>
                  <img src={Tick} alt="item__tick" className="tick" />
                  <span className="item__text">{ingredient}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="ingredient__banner">
          <img src={recipe.image} alt="banner image" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetail;
