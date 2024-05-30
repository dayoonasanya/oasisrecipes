import React from 'react';

import { Link } from 'react-router-dom';

import RandomMeal from '../../components/RandomMeal';

function RecipeSection() {
    return (
        <section className='recipes flex col' id='recipes'>
            <h1 className='bottom animate right'>Trending Dishes</h1>
            <div className="meals">
                {Array.apply(null, Array(3)).map((num, index) => {
                    return <RandomMeal key={index} />
                })}
            </div>
            <Link to='/recipes' className='btn'>Explore More</Link>
        </section >
    );
}

export default RecipeSection;