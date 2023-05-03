import React from 'react';
import Header from '../component/shared/header/Header';
import Banner from '../component/shared/banner/Banner';
import Footer from '../component/shared/footer/Footer';
import BestChefs from '../component/bestChefs/BestChefs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BestChefs></BestChefs>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;