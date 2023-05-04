import React from 'react';
import Header from '../component/shared/header/Header';
import Banner from '../component/shared/banner/Banner';
import Footer from '../component/shared/footer/Footer';
import BestChefs from '../component/bestChefs/BestChefs';
import BestRecipes from '../component/bestRecipes/BestRecipes';
import SubscribeSection from '../component/subscribeSection/SubscribeSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BestChefs></BestChefs>
            <BestRecipes></BestRecipes>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
        </div>
    );
};

export default Main;