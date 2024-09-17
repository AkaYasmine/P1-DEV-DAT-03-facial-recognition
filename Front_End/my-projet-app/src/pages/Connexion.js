import React from 'react';
import Body from '../components/Public/Body';
import NavBar from '../components/NavBar';
import Inscription from '../components/Public/Inscription';
import Connexion from '../components/Public/Connexion';

const Services = () => {
    return (
        <div>
        <NavBar/>
        <Body/>
        <Inscription />
        <Connexion />
        </div>
    );
};

export default Services;