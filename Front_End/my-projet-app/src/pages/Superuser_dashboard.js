import React from 'react';
import Body from '../components/Public/Body';
import NavBar from '../components/Public/NavBar';
import Superuser_dashboard from '../components/Public/Superuser_dashboard';
import Gestion_employe from '../components/Public/Gestion_employés';

const Services = () => {
    return (
        <div>
            <NavBar/>
            <Body/> 
            <Superuser_dashboard/> 
        </div>
    );
};

export default Services;