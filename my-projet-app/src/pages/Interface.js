import React from 'react';
import Body from '../components/Public/Body';
import NavBar from '../components/NavBar';
import Inscription from '../components/Public/Inscription';
import Interface from '../components/Public/Interface';
import AdmissionsBarChart from  '../components/Public/AdmissionsBarChart';

function Services() {
    return (
        <div>
            <NavBar />
            <Body />
            <Inscription />
            <Interface />
            <AdmissionsBarChart />
        </div>
    );
}

export default Services;