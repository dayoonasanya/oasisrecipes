import React from 'react';

import MealCard from './MealCard';
import useFetch from './useFetch';

const RandomMeal = () => {
    const [isLoading, isError, { meals }] = useFetch('/random.php');
    if (isError || isLoading) return;
    return <MealCard meal={meals[0]} />
}

export default RandomMeal;