import React, { useEffect, useState } from 'react';
import './ChefRecipes.css'
import ChefBanner from '../../component/shared/chefBanner/ChefBanner';
import AllRecipes from '../../component/allRecipes/AllRecipes';

const ChefRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect( () => {
        fetch('https://best-chef-of-india-server-mdhasankhan-123.vercel.app/all-recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , [])
    return (
        <div>
            <ChefBanner></ChefBanner>
            <AllRecipes data={recipes}></AllRecipes>
        </div>
    );
};

export default ChefRecipes;