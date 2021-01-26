// FC
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

// const categories = ['Flash', 'Arrow', 'Supergirl'];
const [categories, setCategories] = useState(['Flash']);

// const handleAdd = () => {
//     // setCategories( ['Legends of Tomorrow', ...categories] );
//     setCategories( cats => [...cats, 'Legends Of Tomorrow'] );
// }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
