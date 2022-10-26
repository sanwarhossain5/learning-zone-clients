import React from 'react';
import Navigation from '../Pages/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;