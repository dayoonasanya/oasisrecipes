import React from 'react';

function CategoryCard({ category }) {
    return (
        <div className='card bottom hover animate Bottom'>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <span className='bottom hover truncate'>{category.strCategory}</span>
        </div >
    );
}

export default CategoryCard;