import React from 'react';

import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Navigation/Navigation';
const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;