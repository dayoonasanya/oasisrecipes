import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Ingredients from './Ingredients';
import { AppContext } from '../App';

const MealCard = ({ meal }) => {
    const animate = useContext(AppContext);
    animate();

    return (
        <div className='meal flex col j_between animate top'>
            <div className='image_name flex j_start full'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className='details'>
                    <Link to={`/recipes/${meal.idMeal}`} className='bottom hover'>{meal.strMeal}</Link>
                    <h5>{meal.strArea + " | " + meal.strCategory}</h5>
                </div>
            </div>
            <div className='ingredients full'>
                <Ingredients meal={meal} max={5} >
                    <span>Ingredients</span>
                </Ingredients>
            </div>
            <div className="links flex j_around full">
            <button className='link btn animate Bottom'>
                Learn More...
            </button>
            </div>
        </div >
    )
}

export default MealCard;