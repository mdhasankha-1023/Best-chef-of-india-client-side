import React from 'react';
import Header from '../component/shared/header/Header';
import { Outlet } from 'react-router-dom';

const OthersPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default OthersPage;