import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterDesigne from '../componet/FooterDesigne';
import Header from '../componet/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterDesigne></FooterDesigne>
        </div>
    );
};

export default Main;