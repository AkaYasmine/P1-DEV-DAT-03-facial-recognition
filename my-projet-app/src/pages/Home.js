import React from 'react';
import Body from '../components/Public/Body';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            Page d'acceuil
            <nav>
                <NavBar/>
                <Body/>
            </nav>
        </div>
        
    );
};

export default Home;