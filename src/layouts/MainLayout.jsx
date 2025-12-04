import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar className=""/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;