import React from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();
  const goToConnexion = () => {
    navigate('/Connexion');
  };
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center h-screen">
      <div className="relative p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">Bienvenue à WE.CODE</h1>
        <p className="text-gray-700 text-center mb-8 text-xl">
          Connectez-vous et gérez les employés de l'entreprise.
        </p>
        <div className="flex justify-center">
          <button onClick={goToConnexion} className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-600">
            connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
