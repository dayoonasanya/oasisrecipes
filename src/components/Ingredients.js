import React from 'react';

const Ingredients = ({ meal, max, children }) => {
    const mealIngredient = [];
    for (const ingredient in meal) {
        if (ingredient.includes("strIngredient") && meal[ingredient]) {
            mealIngredient.push(meal[ingredient]);
        }
    }

    return (
        <>
            {children}
            <div className='ingredients_list flex wrap'>
                {mealIngredient.slice(0, max || mealIngredient.length).map((ingredient, index) => {
                    return <div className='ingredient animate Bottom' key={ingredient + index}>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient} />
                        <span key={ingredient} className='truncate'>{ingredient}</span>
                    </div>;
                })}
                {max && mealIngredient?.length - max > 1 && <div className='ingredient flex animate Bottom'>
                    <span>+{mealIngredient?.length - max} More</span>
                </div>}
            </div>
        </>);
}

export default Ingredients;