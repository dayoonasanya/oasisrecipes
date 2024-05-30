import React from 'react';

import MealCard from '../../components/MealCard';
import useFetch from '../../components/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const MealsSection = ({ category, search }) => {
    const [isLoading, isError, { meals: recipes }] = useFetch(`/search.php?s=${search}`);

    if (isError) {
        return <Error msg={isError} />
    }

    if (isLoading) {
        return <Loading/>
    }

    if (!isError) {
        return (
            <section className='recipes flex col'>
                <div className="meals">
                    {recipes && recipes
                        .filter(a => a.strCategory === category || !category)
                        .map(recipe => <MealCard meal={recipe} key={recipe.idMeal} />)
                    }
                </div>
            </section >
        )
    }
}

export default MealsSection;