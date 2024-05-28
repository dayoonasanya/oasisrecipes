import React from 'react';

import StartSection from './StartSection';
// import CategorySection from './CategorySection';
import RecipeSection from './RecipeSection';

const index = () => {
    return (
        <main>
            <StartSection />
            {/* <CategorySection /> */}
            <RecipeSection />
        </main>
    )
}

export default index;