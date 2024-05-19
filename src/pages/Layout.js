import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import { AppContext } from '../App';

const Layout = () => {
    const animate = useContext(AppContext);
    animate();

    return (
        <>
            <ScrollButton />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;