import axios from 'axios';
import React from 'react';
import  { useNavigate } from 'react-router-dom'

const Header = () => {
  
    const navigate = useNavigate();

    const handledeconnexion = () =>{
        const token = localStorage.getItem('access_token');
        axios.post('http://127.0.0.1:8000/api/tasks/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then((res) => {
            localStorage.clear();
            navigate("/Login");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <header>
            </header>
        </div>
    );
};

export default Header;