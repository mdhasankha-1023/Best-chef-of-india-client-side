import React from 'react';
import Header from '../component/shared/header/Header';
import Banner from '../component/shared/banner/Banner';
import Footer from '../component/shared/footer/Footer';
import BestChefs from '../component/bestChefs/BestChefs';
import BestRecipes from '../component/bestRecipes/BestRecipes';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BestChefs></BestChefs>
            <BestRecipes></BestRecipes>
            <Footer></Footer>
        </div>
    );
};

export default Main;