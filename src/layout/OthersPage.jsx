import React from 'react';
import Header from '../component/shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/footer/Footer';


const OthersPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default OthersPage;