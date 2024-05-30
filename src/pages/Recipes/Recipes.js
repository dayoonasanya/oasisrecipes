import React, { useContext, useState } from 'react';

import SearchSection from './SearchSection';
import MealsSection from './MealsSection';
import { AppContext } from '../../App';

const Recipes = () => {
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const animate = useContext(AppContext);
    animate();

    return (
        <main>
            <SearchSection setCategory={setCategory} setSearch={setSearch} />
            <MealsSection category={category} search={search} />
        </main>
    )
}

export default Recipes;