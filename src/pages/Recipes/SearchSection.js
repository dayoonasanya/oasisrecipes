import React, { useState } from 'react';

import useFetch from '../../components/useFetch';

import { FaSearch } from "react-icons/fa";

const SearchSection = ({ setSearch, setCategory }) => {
    const [isLoading, isError, { categories }] = useFetch('/categories.php');
    const [value, setValue] = useState('');

    if (!isLoading && !isError) {
    return (
        <>
            <section className='filters flex animate Bottom'>
                <div className="flex full search" >
                    <input
                        type="text"
                        placeholder='Recipe name...'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    {value && <button className='btn flex' onClick={(e) => setSearch(value)}><FaSearch /></button>}
                </div>
                <select className='btn' name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
                        <option value={''}>categories</option>
                        {categories && categories.map(({ idCategory, strCategory }) =>
                            <option value={strCategory} key={idCategory}>{strCategory}</option>
                        )}
                    </select>
            </section>
        </>)
    }
}

export default SearchSection;