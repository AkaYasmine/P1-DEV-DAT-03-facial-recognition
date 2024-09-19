import React from 'react';
import { Navigate } from 'react-router-dom';

// Composant pour protéger les routes
const RoutesPriveAdmin = ({ proteger_route }) => {
   // Vérifie si le token est présent
   const token = localStorage.getItem('access_token');  
   if (!token) {
      // Redirection si l'utilisateur n'est pas connecté
      return <Navigate to="/Login" />;
   }
   // Si pas de token, redirige vers la page de login
   return proteger_route ;
};

export default RoutesPriveAdmin;
