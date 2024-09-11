import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from '../components/Public/Body';
import NavBar from '../components/Public/NavBar';


const Layout = () => {
    return (
        <div>
            <Body/>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Layout;